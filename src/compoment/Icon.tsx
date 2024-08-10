import { Component, JSX, lazy } from "solid-js";

interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
	name: string;
}

const Icon: Component<IconProps> = (props) => {
	const IconComponent = lazy(async () => {
		try {
			const module = await import(`../assets/icons/${props.name}.svg`);
			return module;
		} catch (error) {
			console.error(`Failed to load icon: ${props.name}`, error);
			return null;
		}
	});

	return <IconComponent {...props} />;
};

export default Icon;
