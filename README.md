![nuxt-shadcn-dashboard-social-card](https://nuxt-shadcn-dashboard.vercel.app/social-card.png)

# Nuxt Shadcn Vue TailwindCSS 4 - Dashboard

[![built with nuxt][nuxt-src]][nuxt-href]

- [Live demo](https://nuxt-shadcn-dashboard.vercel.app)
- [Component Documentation](https://shadcn-vue.com/docs/introduction)

## Quick Start

```bash [Terminal]
npx nuxi@latest init -t github:dianprata/nuxt-shadcn-dashboard my-dashboard-app
cd my-dashboard-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## App Settings
You can change the app settings in `app.config.ts` file.
If you want to change app settings, you have to clear cookie 'app_settings' first.
```
export default defineAppConfig({
  appSettings: {
    sidebar: {
      collapsible: 'offcanvas', // 'offcanvas' | 'icon' | 'none'
      side: 'left', // 'left' | 'right'
      variant: 'inset', // 'sidebar' | 'floating' | 'inset'
    },
    theme: {
      color: 'default', // 'default' | 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal' | 'yellow' | 'rose'
      type: 'scaled', // 'default' | 'mono' | 'scaled'
    }
  },
})
```

## Contributing

1. Clone this repository.
2. Install dependencies `pnpm install`.
3. Use `pnpm run dev` to start dev server.

## Credits

- [Nuxt.js](https://nuxtjs.org/)
- [Shadcn Vue](https://shadcn-vue.com/)
- [TailwindCSS](https://tailwindcss.com/)

## License

MIT

[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com/
