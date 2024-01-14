<script lang="ts">
	import { Calendar } from "$/lib/default/ui/calendar";
	import { today, getLocalTimeZone } from "@internationalized/date";

	let value = today(getLocalTimeZone());
</script>

<Calendar bind:value class="border rounded-md" />
