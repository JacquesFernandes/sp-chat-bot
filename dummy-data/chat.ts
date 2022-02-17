import {Question} from "../types/chat";

export const dummyQuestions: Question[] = [
	{
		key: 'question_1',
		preText: [
			'We would like to know a bit more about you to provide the best experience for you.',
		],
		question: 'To start, what is your residence type?',
		options: [
			'Flat',
			'House',
			'Bungalow',
			'Other',
		],
		nextQuestionKey: 'question_2',
	},

	{
		key: 'question_2',
		preText: [
			'Great, thank you!',
		],
		question: 'Can you tell us, on average, how much time you spend home every week?',
		options: [
			'Less than 3 days',
			'3 to 5 days',
			'Everyday',
		],
		nextQuestionKey: 'question_3',
	},

	{
		key: 'question_3',
		question: 'Do you work from home? If so, how many days, on average?',
		options: [
			'I don’t work from home',
			'1 day a week',
			'2 to 3 days a week',
			'I work from home exclusively',
		],
		nextQuestionKey: 'question_4',
	},

	{
		key: 'question_4',
		question: 'Do you have double glazing in your house?',
		options: [
			'No',
			'Only some rooms',
			'Yes',
		],
		nextQuestionKey: 'question_5'
	},

	{
		key: 'question_5',
		question: 'How much of your budget would you ideally allocate to your energy needs?',
		options: [
			'I fell like I’m spending enough currently',
			'I have room to spend a bit more',
			'I would spend more if I could get energy/money saving solutions',
			'I would spend more if I could get more environmental friendly energy',
		],
		nextQuestionKey: 'question_6',
	},

	{
		key: 'question_6',
		question: 'What matters to you the most when it comes to your energy?',
		options: [
			'How it’s generated and how it impacts the environment',
			'How much it will impact me financially',
			'How it impacts communities and wildlife',
			'How tech advances are improving/optimizing energy generation/consumption',
		],
		nextQuestionKey: 'question_7',
	},

	{
		key: 'question_7',
		preText: [
			'Just going to ask you a few questions about your house appliances',
			'This helps in generating a "guess-timate" of your energy consumption'
		],
		question: 'How many fridges do you own?',
		options: [
			'1',
			'2',
			'3',
			'4',
			'5+',
		],
		nextQuestionKey: 'question_8',
	},

	{
		key: 'question_8',
		question: 'How many washing machines do you own?',
		options: [
			'1',
			'2',
			'3',
			'4',
			'5+',
		],
		nextQuestionKey: 'question_9',
	},

	{
		key: 'question_9',
		question: 'How many dishwashers do you own?',
		options: [
			'1',
			'2',
			'3',
			'4',
			'5+',
		],
		nextQuestionKey: 'question_10',
	},

	{
		key: 'question_10',
		question: 'How many freezers do you own?',
		options: [
			'1',
			'2',
			'3',
			'4',
			'5+',
		],
	},
];
