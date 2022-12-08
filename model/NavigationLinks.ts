export type NavigationLinkItem = {
    label: string,
    href: string
}

export type NavigationLink = {
    label: string,
    description: string,
    href: string,
    menu_contents: NavigationLinkItem[]
}

