
<script>
  import { auth, provider, signInWithRedirect, signOut } from "$lib/firebase";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let user = writable(null);

  const login = async () => {
    try {
      const result = await signInWithRedirect(auth, provider);
      user.set(result.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = async () => {
    await signOut(auth).then;
    user.set(null);
  };

  onMount(() => {
    auth.onAuthStateChanged((u) => user.set(u));
  });
</script>

{#if $user}
  <p>Welcome, {$user.displayName}</p>
  <button on:click={logout}>Logout</button>
{:else}
  <button on:click={login}>Login with Google</button>
{/if}
