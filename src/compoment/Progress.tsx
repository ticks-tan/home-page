import { cn } from "../lib/utils";

interface ProgressProps {
	value: number;
	className?: string;
	bgColor?: string;
	color?: string;
}

const Progress = (props: ProgressProps) => {
	return (
		<div class={cn(props.className)}>
			<span id="ProgressLabel" class="sr-only">
				Loading
			</span>

			<span
				role="progressbar"
				aria-labelledby="ProgressLabel"
				aria-valuenow="75"
				class={cn(
					"block rounded-full bg-surface",
					props.bgColor && `bg-${props.bgColor}`
				)}
			>
				<span
					class={cn(
						"block h-2 rounded-full bg-textColor",
						props.color && `bg-${props.color}`
					)}
					style={`width: ${props.value}%`}
				></span>
			</span>
		</div>
	);
};

export default Progress;
