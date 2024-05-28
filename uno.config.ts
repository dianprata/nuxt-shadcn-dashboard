import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
	variants: [
		{
			// nth-[]:class
			name: ':nth-child()',
			match: (matcher: string) => {
				const match = matcher.match(/^nth-\[(.+?)\]:/)
				if (!match)
					return matcher
				return {
					// slice `hover:` prefix and passed to the next variants and rules
					matcher: matcher.substring(match[0].length),
					selector: s => `${s}:nth-child(${match[1]})`,
				}
			},
			multiPass: true,
		},
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			cdn: 'https://esm.sh/',
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Chivo',
				mono: 'Chivo Mono',
			},
		}),
		presetAnimations(),
		presetShadcn(),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup({ separators: [':'] }),
	],
	content: {
		pipeline: {
			include: [
				// the default
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'components/ui/**/*.{js,ts}',
			],
		},
	},
});

