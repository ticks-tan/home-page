import { cn } from "../lib/utils";
import type { Component } from "solid-js";
import { JSX } from "solid-js";
import Avatar from "./Avatar";
import { siteConfig } from "../site.config";

export type QuestionProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Question: Component<QuestionProps> = (props) => {
	return (
		<div class={cn("transition-bg", props.class)}>
			<div class="mr-4">
				<Avatar class="w-10 h-10" fallback="Y" />
			</div>
			<div>
				<p class="text-sm text-gray-400">You:</p>
				<div class="text-base text-accent">{props.children}</div>
			</div>
		</div>
	);
};

export type AnswerProps = JSX.HTMLAttributes<HTMLDivElement>;

export const Answer: Component<AnswerProps> = (props) => {
	const favFallback =
		siteConfig.name.length <= 2
			? siteConfig.name.toUpperCase()
			: siteConfig.name.slice(0, 2).toUpperCase();
	return (
		<div {...props} class={cn("transition-bg", props.class)}>
			<div class="mr-4">
				<Avatar
					class="w-10 h-10"
					src={siteConfig.avatarUrl}
					fallback={favFallback}
				/>
			</div>
			<div class="flex-grow">
				<p class="text-sm text-gray-400">{siteConfig.name}:</p>
				<div class="bg-bgColor p-4 rounded-lg text-textColor">
					{props.children}
				</div>
			</div>
		</div>
	);
};
