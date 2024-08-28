import Avatar from "./Avatar";
import Progress from "./Progress";
import { Question, Answer } from "./QA";
import Icon from "./Icon";
import { siteConfig } from "../site.config";
import { createEffect, createSignal, Show } from "solid-js";

const getLocalTheme = () => {
	const localTheme = localStorage.getItem("theme");
	if (localTheme != null && localTheme === "light") {
		return "light";
	}
	return "dark";
};

export default function Component() {
	const favFallback =
		siteConfig.name.length <= 2
			? siteConfig.name.toUpperCase()
			: siteConfig.name.slice(0, 2).toUpperCase();

	const [localTheme, setLocalTheme] = createSignal<"light" | "dark">(
		getLocalTheme()
	);

	createEffect(() => {
		localStorage.setItem("theme", localTheme());
		requestAnimationFrame(() => {
			document.documentElement.setAttribute("data-theme", localTheme());
		});
	});

	return (
		<div class="bg-bgColor min-h-screen flex flex-col items-center py-10 transition-bg">
			<div
				class="flex flex-col items-center mb-10"
				onDblClick={() =>
					setLocalTheme(localTheme() == "dark" ? "light" : "dark")
				}
			>
				<Avatar
					class="w-36 h-36 lg:w-60 lg:h-60 mb-4"
					src={siteConfig.avatarUrl}
					fallback={favFallback}
				/>
				<h1 class="text-2xl lg:text-4xl text-textColor">
					{siteConfig.name}
				</h1>
				<span class="text-accent text-base lg:text-lg mt-2 bg-surface rounded-full py-1 px-3 inline-flex items-center justify-center">
					软件开发 / 工程师
				</span>
			</div>
			<div class="bg-surface container max-w-screen-lg rounded-lg border-accent p-4 overflow-auto scrollbar-thin scrollbar-thumb-surface scrollbar-track-bgColor scrollbar-w-2">
				<Question class="flex items-center mb-4">
					<p>我第一次来这儿，能简单介绍下吗？</p>
				</Question>
				<Answer class="flex items-center mb-4">
					<p class="mb-1">
						欢迎！👋
						我是皮皮休，一位游走在互联网的打工人，对计算机很感兴趣，我最喜欢的编程语言是
						C++，最喜欢的操作系统是
						Linux，欢迎来到我的个人主页，随我一起网上冲浪！（提示：双击头像有惊喜）
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
							我使用的语言（或技术）及使用情况如下：
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
							不错，我能通过哪些方式联系到你？
						</p>
					</Question>
					<Answer class="flex items-center mb-4">
						<p class="mb-4">你可以通过下面这些渠道联系到我：</p>
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
							你还部署了哪些服务或网站？
						</p>
					</Question>
					<Answer class="flex items-center mb-4">
						<p class="mb-4">下面是一些我部署的其他网站：</p>
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
				<a
					href="https://docs.solidjs.com"
					target="_blank"
					class="hover:underline"
				>
					SolidJS
				</a>{" "}
				| &copy; {new Date().getFullYear()} All Rights Reserved.
			</footer>
		</div>
	);
}
