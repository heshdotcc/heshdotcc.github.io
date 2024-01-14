<script lang="ts">
	import { Button } from "$/lib/default/ui/button";
	import * as Tooltip from "$/lib/default/ui/tooltip";
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline">Hover</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>
		<p>Add to library</p>
	</Tooltip.Content>
</Tooltip.Root>
