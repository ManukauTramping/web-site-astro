interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_DELIVERY_API: string;
  readonly CONTENTFUL_PREVIEW_API: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFUL_USE_PREVIEW_API: boolean;
  readonly PLANNEDTRIP_FIRSTDATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}