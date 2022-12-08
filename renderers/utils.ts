import { parse } from 'yaml';
import fs from 'fs';
import { NavigationLink } from '../model/NavigationLinks';
import { BreadcrumbLink } from '../model/BreadcrumbLink';
import { Taxon } from '../model/Taxon';

export const toTitleCase = (s: String): String => {
  return s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
}

export const displayableDate = (dateString: string) => {
  const date = new Date(dateString)
  return [
    date.getDate(),
    date.toLocaleString('default', { month: 'long' }),
    date.getFullYear(),
  ].join(' ');
}

export const getNavLinks = (): NavigationLink[] => {
  const file = fs.readFileSync('./data/en.yml', 'utf8');
  return parse(file).en.components.layout_super_navigation_header.navigation_links as NavigationLink[]
}

export const taxonBreadcrumbs = (taxonTree: Taxon, breadcrumbs: BreadcrumbLink[] = [], i: number = 0): BreadcrumbLink[] => {
  const newBreadcrumbs = breadcrumbs.concat({title: taxonTree.title, path: taxonTree.base_path})
  if (taxonTree.links.parent_taxons &&  taxonTree.links.parent_taxons.length > 0) {
    return taxonBreadcrumbs(taxonTree.links.parent_taxons[0], newBreadcrumbs, i + 1) 
  } else {
    return newBreadcrumbs.concat({title: "Home", path: "/"}).reverse()
  }
}
