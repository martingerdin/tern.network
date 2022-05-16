// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check

import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';
import svelte from "@astrojs/svelte";

export default defineConfig ({
	// Enable the Svelte renderer to support Svelte components.
	integrations: [svelte(),],
	adapters: vercel(),
});
