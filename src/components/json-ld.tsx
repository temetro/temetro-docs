// schema.org JSON-LD helpers for the docs site. Structured data is invisible to
// readers but is how search engines understand the site's identity and the
// hierarchy of a docs page — the main signal behind organic sitelinks.

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// A BreadcrumbList (Docs → section → page) exposing where a page sits in the tree.
export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
