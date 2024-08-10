import Avatar from "./Avatar";
import Progress from "./Progress";
import { Question, Answer } from "./QA";
import Icon from "./Icon";
import { siteConfig } from "../site.config";
import { Show } from "solid-js";

export default function Component() {
	const favFallback =
		siteConfig.name.length <= 2
			? siteConfig.name.toUpperCase()
			: siteConfig.name.slice(0, 2).toUpperCase();
	return (
		<div class="bg-bgColor min-h-screen flex flex-col items-center py-10">
			<div class="flex flex-col items-center mb-10">
				<Avatar
					class="w-36 h-36 lg:w-60 lg:h-60 mb-4"
					src={siteConfig.avatarUrl}
					fallback={favFallback}
				/>
				<h1 class="text-2xl lg:text-4xl text-textColor">
					{siteConfig.name}
				</h1>
				<span class="text-accent text-base lg:text-lg mt-2 bg-surface rounded-full py-1 px-3 inline-flex items-center justify-center">
					Full-stack developer / Software Engineer
				</span>
			</div>
			<div class="bg-surface container max-w-screen-lg rounded-lg border-accent p-4 overflow-auto scrollbar-thin scrollbar-thumb-surface scrollbar-track-bgColor scrollbar-w-2">
				<Question class="flex items-center mb-4">
					<p>Hey, What's the vibe on your end?</p>
				</Question>
				<Answer class="flex items-center mb-4">
					<p class="mb-1">
						👋 Hey there! I'm Ticks, a nobody who wanders around the
						Internet. I've been programming since I was 17 years
						old, and I'm very interested in computers. My favorite
						programming language is C++, and my favorite operating
						system is Linux, so welcome to my personal space and
						come surf with me!
					</p>
				</Answer>
				<Show
					when={
						siteConfig.codeLangQuestion &&
						siteConfig.codeLangQuestion.length > 0
					}
				>
					<Question class="flex items-center mb-4">
						<p class="text-base text-accent">
							{siteConfig.codeLangQuestion}
						</p>
					</Question>
					<Answer class="flex items-center mb-4">
						<p class="mb-4">
							My skill arsenal and utilization includes:
						</p>
						<div class="mt-4 mb-8 bg-gray-400 h-[1px] w-full" />
						<div class="space-y-4 pl-2">
							{siteConfig.codeLangs.map((v) => (
								<div class="flex items-center justify-between">
									<div class="flex items-center mr-4">
										<Icon
											class="h-6 w-6 mr-2 text-highlight"
											name={v.icon}
										/>
										<span>{v.name}</span>
									</div>
									<div class="w-[70%]">
										<Progress
											value={v.usage}
											aria-label={`${v.name} expertise`}
										/>
									</div>
								</div>
							))}
						</div>
					</Answer>
				</Show>
				<Show when={siteConfig.concats.length > 0}>
					<Question class="flex items-center mb-4">
						<p class="text-base text-accent">
							Great! And how can I get in touch with you?
						</p>
					</Question>
					<Answer class="flex items-center mb-4">
						<p class="mb-4">
							You can reach me through the following channels:
						</p>
						<div class="mt-4 mb-8 bg-gray-400 h-[1px] w-full" />
						<ul class="pl-2 space-y-2">
							{siteConfig.concats.map((v) => (
								<li>
									<a
										href={v.link}
										class="text-highlight inline-flex items-center"
									>
										<Icon
											class="h-6 w-6 mr-2"
											name={v.icon}
										/>
										{v.name}
									</a>
								</li>
							))}
						</ul>
					</Answer>
				</Show>
				<Show when={siteConfig.websites.length > 0}>
					<Question class="flex items-center mb-4">
						<p class="text-base text-accent">
							Do you have any other websites?
						</p>
					</Question>
					<Answer class="flex items-center mb-4">
						<p class="mb-4">
							Sure, here are some of my other websites:
						</p>
						<div class="mt-4 mb-8 bg-gray-400 h-[1px] w-full" />
						<ul class="list-disc pl-6 space-y-2">
							{siteConfig.websites.map((v) => (
								<li>
									<a
										href={v.link}
										class="text-highlight inlin-flex items-center underline underline-offset-4"
									>
										{v.name}
									</a>
								</li>
							))}
						</ul>
					</Answer>
				</Show>
			</div>
			<footer class="w-full max-w-3xl mt-8 text-center text-gray-400 text-sm">
				Powered by{" "}
				<a href="https://docs.solidjs.com" target="_blank">
					SolidJS
				</a>{" "}
				| &copy; {new Date().getFullYear()} All Rights Reserved.
			</footer>
		</div>
	);
}
