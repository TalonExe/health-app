<script lang="ts">
    import Card from "$lib/components/ui/card/card.svelte";
    import CardHeader from "$lib/components/ui/card/card-header.svelte";
    import CardTitle from "$lib/components/ui/card/card-title.svelte";
    import CardDescription from "$lib/components/ui/card/card-description.svelte";
    import CardContent from "$lib/components/ui/card/card-content.svelte";
    import CardFooter from "$lib/components/ui/card/card-footer.svelte";

    let props = $props();
</script>

<Card class="bg-white m-3 p-3">
    <CardHeader>
      <img src={props.image} alt="" class="w-full h-40 object-cover rounded-t-lg" />  
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </CardHeader>
    <CardContent>
        <!--<div class ="mt-2">{props.ingredients}</div>-->
        {props.ingredients}
    </CardContent>
    <CardFooter>
      <button type="button" class="bg-blue-100 p-3">Add to Cart</button>
    </CardFooter>
</Card>