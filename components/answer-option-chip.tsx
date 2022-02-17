import {FC} from "react";

export interface AnswerOptionChipProps {
	onClick?: () => void;
}
export const AnswerOptionChip: FC<AnswerOptionChipProps> = (props) => <button onClick={props.onClick} className="max-w-screen-sm min-w-fit snap-start min-h-fit h-full p-3 rounded rounded-lg bg-green-300" >
	{props.children}
</button>
