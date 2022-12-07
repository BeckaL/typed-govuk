import { parse } from 'yaml';
import fs from 'fs';

export type NavigationLinkItem = {
    label: String,
    href: String
}

export type NavigationLink = {
    label: String,
    menu_contents: NavigationLinkItem[]
}

export const getNavLinks = (): NavigationLink[] => {
    const file = fs.readFileSync('./data/en.yml', 'utf8');
    return parse(file).en.components.layout_super_navigation_header.navigation_links as NavigationLink[]
}