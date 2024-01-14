import { persisted } from "svelte-persisted-store";

import type { Style } from "$lib/registry/styles";
import type { Theme } from "$lib/registry/themes";

type Config = {
	style: Style["name"];
	theme: Theme["name"];
	radius: number;
};

export const config = persisted<Config>("config", {
	style: "new-york",
	theme: "zinc",
	radius: 0.5
});
