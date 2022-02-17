import {FC} from "react";

export const BotMessage: FC = ({ children }) => {
	return(
		<div className="px-2.5 w-full flex flex-row justify-start" >
			<div className="max-w-sm w-fit p-3 rounded-lg rounded-bl-none bg-white border" >
				{ children }
			</div>
		</div>
	);
};

export const UserMessage: FC = ({ children }) => {
	return(
		<div className="px-2.5 w-full flex flex-row justify-end" >
			<div className="max-w-sm w-fit p-3 rounded-lg rounded-br-none bg-gray-100 border" >
				{ children }
			</div>
		</div>
	);
}
