<script lang="ts">
    import { createLabel, melt } from '@melt-ui/svelte';

    let a=$props();
  
    const {
      elements: { root },
    } = createLabel();
  </script>
  
  <form>
    <div class="flex flex-col items-start justify-center">
      <label
        use:melt={$root}
        for={a.name}
        class="mb-0.5 font-medium text-magnum-900"
        data-melt-part="root"
      >
        <span>{a.labelnm}</span>
      </label>
      <input
        type="text"
        id={a.id}
        class="h-10 w-[80%] rounded-md bg-white px-3 py-2 text-magnum-700"
        placeholder={a.placeholder}
      />
    </div>
  </form>