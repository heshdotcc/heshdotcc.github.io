<script lang="ts">
	import { Label } from "$/lib/new-york/ui/label";
	import { cn } from "$lib/utils";
	import { getContext } from "svelte";
	import type { FormFieldContext } from "./types";
	let className: string | undefined | null = undefined;
	export { className as class };

	const { formItemId, errors } = getContext<FormFieldContext>("FormField");
</script>

<Label class={cn($errors && "text-destructive", className)} for={formItemId}>
	<slot />
</Label>
