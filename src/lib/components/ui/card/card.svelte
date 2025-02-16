<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<div
	class={cn("bg-card bg-purple-100 hover:bg-purple-150 text-card-foreground rounded-lg border shadow-sm w-100 border-purple-100 m-5", className)}
	{...$$restProps}
>
	<slot />
</div>
