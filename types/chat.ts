export interface Message {
	type: 'bot' | 'user';
	content: string;
}

export interface Question {
	key: string,
	preText?: string[],
	question: string;
	options: string[];
	nextQuestionKey?: string;
}

export interface Response {
	question_key: string;
	question: string;
	answer: string;
}

export enum Participants {
	Bot,
	User,
}
