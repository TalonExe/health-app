<script lang="ts">
    import Card from "$lib/components/ui/card/card.svelte";
    import CardHeader from "$lib/components/ui/card/card-header.svelte";
    import CardTitle from "$lib/components/ui/card/card-title.svelte";
    import CardDescription from "$lib/components/ui/card/card-description.svelte";
    import CardContent from "$lib/components/ui/card/card-content.svelte";
    import CardFooter from "$lib/components/ui/card/card-footer.svelte";

    let props = $props();
</script>

<Card>
    <CardHeader>
      <img src={props.image} alt="" class="w-full h-40 object-cover rounded-t-lg" />  
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </CardHeader>
    <CardContent>
    </CardContent>
    <CardFooter>
      <button type="button">Modify</button>
    </CardFooter>
</Card>