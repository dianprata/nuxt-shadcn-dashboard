export const useBreadcrumb = defineStore('appConf', () => {
  const breadcrumbLinks = useCookie<{ title: string, href: string }[]>('breadcrumb', undefined)

  const setBreadcrumb = (links: { title: string, href: string }[]) => {
    breadcrumbLinks.value = links
  }
  return {
    breadcrumbLinks,
    setBreadcrumb,
  }
})
