<script>
	import { Calendar } from 'shadcn-svelte';
  
	let date = new Date(); // Default selected date
</script>
  
<Calendar value={new Date()} disabled={() => true} />

  
