/* @refresh reload */
import { render } from "solid-js/web";

import "./style/global.css";
import Home from "./compoment/Home";

const root = document.getElementById("app");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
	);
}

render(() => <Home />, root!);
