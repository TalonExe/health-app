<script lang="ts">
    import Card from "$lib/components/ui/card/card.svelte";
    import CardHeader from "$lib/components/ui/card/card-header.svelte";
    import CardTitle from "$lib/components/ui/card/card-title.svelte";
    import CardDescription from "$lib/components/ui/card/card-description.svelte";
    import CardContent from "$lib/components/ui/card/card-content.svelte";
    import CardFooter from "$lib/components/ui/card/card-footer.svelte";

    // Define prop types explicitly
    type MenuUserProps = {
        title: string;
        description: string;
        image: string;
        ingredients: string;
        class?: string;
    }

    // Use proper props destructuring with runes
    let { title, description, image, ingredients, class: className = '' } = $props();
</script>

<Card class="bg-white m-3 p-3 {className}">
    <CardHeader>
        {#if image}
            <img 
                src={image} 
                alt={title} 
                class="w-full h-40 object-cover rounded-t-lg"
            />
        {/if}
        <CardTitle>{title || 'Untitled'}</CardTitle>
        <CardDescription>{description || ''}</CardDescription>
    </CardHeader>
    <CardContent>
        <div class="mt-2 text-gray-600">{ingredients || ''}</div>
    </CardContent>
    <CardFooter>
        <button 
            type="button" 
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
            Add to Cart
        </button>
    </CardFooter>
</Card>
