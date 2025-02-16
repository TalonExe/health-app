<script lang="ts">
    import { createLabel } from '@melt-ui/svelte';

    export let name: string;
    export let id: string;
    export let placeholder: string;
    export let labelnm: string;
    export let bindValue: string; // To bind form input
   
    const {
        elements: { root },
    } = createLabel();

    $: console.log(bindValue)
</script>

<div class="flex flex-col items-start justify-center">
    <label
        for={name}
        class="mb-0.5 font-medium text-magnum-900"
        data-melt-part="root"
    >
        <span>{labelnm}</span>
    </label>
    <input
        type="text"
        id={id}
        class="h-10 w-[80%] rounded-md bg-white px-3 py-2 text-magnum-700"
        placeholder={placeholder}
        bind:value={bindValue}/>
</div>
