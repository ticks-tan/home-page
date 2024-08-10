import { createSignal, JSX, onCleanup } from "solid-js";
import { cn } from "../lib/utils";

interface AvatarProps extends JSX.HTMLAttributes<HTMLDivElement> {
	src?: string;
	fallback: string;
}

const Avatar = (props: AvatarProps) => {
	const [loaded, setLoaded] = createSignal(false);

	let imgElement: HTMLImageElement | undefined;

	const handleLoad = () => {
		setLoaded(true);
	};

	const handleError = () => {
		setLoaded(false);
	};

	onCleanup(() => {
		if (imgElement) {
			imgElement.removeEventListener("load", handleLoad);
			imgElement.removeEventListener("error", handleError);
		}
	});

	return (
		<div
			class={cn(
				"relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2a323c] overflow-hidden",
				props.class
			)}
		>
			{props.src && (
				<img
					ref={imgElement}
					src={props.src}
					alt={props.fallback}
					onLoad={handleLoad}
					onError={handleError}
					class="absolute inset-0 w-full h-full object-cover rounded-full"
					style={{ display: loaded() ? "block" : "none" }}
				/>
			)}
			{!loaded() && (
				<span class="text-xl font-semibold text-[#a6adba]">
					{props.fallback}
				</span>
			)}
		</div>
	);
};

export default Avatar;
