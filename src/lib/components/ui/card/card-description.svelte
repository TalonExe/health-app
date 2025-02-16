<script>
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<p class={cn("text-muted-foreground text-sm text-black text-xl", className)} {...$$restProps}>
	<slot />
</p>
