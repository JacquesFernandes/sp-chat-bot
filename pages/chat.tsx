import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect, useRef, useState} from "react";
import {BotMessage, UserMessage} from '../components/messages';
import {AnswerOptionChip} from '../components/answer-option-chip';
import {Message, Participants, Question, Response} from '../types/chat';
import { dummyQuestions } from '../dummy-data/chat';

const endMessages: string[] = [
	'Thank you for your replies',
	'We will be taking your answers into consideration for your energy experience with Scottish Power!'
]

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			questions: dummyQuestions,
			startingQuestion: dummyQuestions[0],
		}
	}
}

interface ChatPageProps {
	questions: Question[];
	startingQuestion: Question;
}

const Chat: NextPage<ChatPageProps> = ({ questions, startingQuestion }) => {

	const [ messages, setMessages ] = useState<Message[]>([]);
	const [ responses, setResponses ] = useState<Response[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState<Question>(startingQuestion);
	const [ activeParticipant, setActiveParticipant ] = useState<Participants>(Participants.Bot);
	const scrollRef = useRef<HTMLDivElement>();

	const addMessage = (message: Message) => setMessages((messages) => [ ...messages, message ]);
	const addResponse = (response: Response) => setResponses([ ...responses, response ]);

	const botSeriesMessage = useCallback((botMessages: string[]): Promise<void> => {
		return new Promise<void>((resolve) => {
			if (botMessages.length) {
				const interval = setInterval(() => {
					const message = botMessages.shift();
					if (message) {
						addMessage({
							type: 'bot',
							content: message,
						});
					}
					else {
						clearInterval(interval);
						return resolve();
					}
				}, 500 + (Math.random() * 500));
			}
			else {
				return resolve();
			}
		});
	}, []);

	const selectResponse = (response: Response) => {
		addResponse(response);
		const message: Message = {
			type: 'user',
			content: response.answer
		};
		addMessage(message);
		setActiveParticipant(Participants.Bot);
		setCurrentQuestion((currentQuestion) => {
			const nextQuestion = questions.find((question: Question) => question.key === currentQuestion.nextQuestionKey);
			if (nextQuestion) return nextQuestion;
			setTimeout(() => {
				botSeriesMessage(endMessages)
				.then(() => console.log("Final message sent!"));
			}, 750)
			return currentQuestion;
		});
	};

	// On mount
	useEffect(() => {
		setTimeout(() => {
			addMessage({
				type: 'bot',
				content: 'Hello There!'
			});
		}, 500);
	}, []);

	// Whenever a new currentQuestion is set
	useEffect(() => {
		const preMessages = currentQuestion.preText ?? [];
		botSeriesMessage(preMessages)
		.then(() => {
			setTimeout(() => {
				addMessage({
					type: 'bot',
					content: currentQuestion.question
				});
				setActiveParticipant(Participants.User);
			}, 1000 + (Math.random() * 500));
		});
	}, [ currentQuestion, botSeriesMessage ]);

	// Ensure scroll is always at bottom
	useEffect(() => {
		setTimeout(() => {
			if (scrollRef.current) {
				scrollRef.current.scrollTop = scrollRef.current.scrollHeight * 1.5;
			}
		}, 250);
	}, [ messages.length ])

	return(
		<>
			<Head>
				<title>Chat | Customer Profiling</title>
			</Head>

			<main className="main-background flex flex-row justify-center items-end p-2" >
				<div className="w-full max-w-xl h-full bg-white px-3 flex flex-col" >
					{/*Chat head*/}
					<div className="m-3 mb-0 flex flex-row items-center" >
						<button className="h-full px-2 py-1 flex flex-row items-center" >
							<FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
							<p>Back</p>
						</button>
					</div>

					<hr className="my-3" />

					{/*Chat Main*/}
					{/*@ts-ignore*/}
					<div className="w-full flex-1 overflow-y-scroll scroll-smooth space-y-3 flex flex-col" ref={scrollRef} >
						{
							messages.map((message: Message, index) => message.type === 'user'
							? <UserMessage key={`user_message_${index}`} >{ message.content }</UserMessage>
							: <BotMessage key={`bot_message_${index}`} >{ message.content }</BotMessage>)
						}
					</div>

					<hr className="my-3" />

					{/*Chat User Input*/}
					<div className={`w-full min-h-[3rem] max-h-24 mb-3 snap-x snap-mandatory relative flex flex-row items-stretch overflow-x-auto gap-3 ${ activeParticipant !== Participants.User ? 'bg-gray-200 pointer-events-none' : ''}`} >
						{
							activeParticipant == Participants.User
							&& currentQuestion?.options.map((option, index) => {
								const response: Response = {
									question_key: currentQuestion.key,
									question: currentQuestion.question,
									answer: option,
								};
								return <AnswerOptionChip onClick={() => { selectResponse(response) }} key={`option_${index}`} >
									{option}
								</AnswerOptionChip>;
							})
						}
					</div>
				</div>
			</main>

			<footer>
			</footer>
		</>
	);
}

export default Chat;
