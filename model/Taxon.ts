export type Taxon = {
    content_id: string,
    title: string,
    locale: string,
    api_path: string,
    base_path: string,
    document_type: string,
    public_updated_at: string,
    schema_name: string,
    withdrawn: false,
    description: string,
    details: {
      internal_name: string,
      notes_for_editors: string,
      visible_to_departmental_editors: boolean
    },
    phase: string,
    links: {
      parent_taxons: Taxon[]
    }
  }