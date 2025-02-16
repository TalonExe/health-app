# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Setting Up
1. The first step is to download bun and install as package manager. The link for downloading are provided as such:https://bun.sh/docs/installation
2. Cloning this repository by using https link
3. Open your project and use 'cd' in terminal to enter to your project directory
4. Use 'bun install' to install and refresh all dependencies needed

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Environment Variables

'''bash
GEMINI_API_KEY="Get your own key from the gemini developer website"
FIREBASE_SECRET_KEY="Get from firebase console settings"
'''
