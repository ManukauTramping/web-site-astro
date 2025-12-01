import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export const PageContentTypeId = "information-page";
export const DropdownMenuContentTypeId = "menuItem";
export const ContactContentTypeId = "tripLeaders";
export const TripContentTypeId = "trip";
export const PhotoLinkContentTypeId = "photoLink";

export interface PhotoLink {
  contentTypeId: typeof PhotoLinkContentTypeId,
  fields: {
    caption: EntryFieldTypes.Symbol,
    page: EntryFieldTypes.EntryLink<Page>,
    photo: EntryFieldTypes.AssetLink,
  }
}

export interface Page {
  contentTypeId: typeof PageContentTypeId,
  fields: {
    name: EntryFieldTypes.Symbol,
    slug: EntryFieldTypes.Symbol,
    menuItemOrder: EntryFieldTypes.Integer,
    content: EntryFieldTypes.RichText,
    includedList: EntryFieldTypes.Symbol,
    photoCarousel: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>,
    photoLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PhotoLink>>,
    contentMarkdown: EntryFieldTypes.RichText,
  }
}

export interface DropdownMenu {
  contentTypeId: typeof DropdownMenuContentTypeId,
  fields: {
    title: EntryFieldTypes.Symbol,
    order: EntryFieldTypes.Integer,
    childPages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Page>>,
  }
}

export interface Contact {
  contentTypeId: typeof ContactContentTypeId,
  fields: {
    name: EntryFieldTypes.Symbol,
    phoneNumber: EntryFieldTypes.Symbol,
  }
}

export interface Trip {
  contentTypeId: typeof TripContentTypeId,
  fields: {
    title: EntryFieldTypes.Symbol,
    tripDate: EntryFieldTypes.Date,
    expectedDuration: EntryFieldTypes.Symbol,
    terrainDifficulty: EntryFieldTypes.Symbol,
    grade: EntryFieldTypes.Symbol,
    meetupDetails: EntryFieldTypes.Text,
    fare: EntryFieldTypes.Symbol,
    leaders: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<Contact>>,
    description: EntryFieldTypes.RichText,
    destination: EntryFieldTypes.Location,
  }
}

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID!,
    accessToken: import.meta.env.CONTENTFUL_USE_PREVIEW_API
      ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN!
      : import.meta.env.CONTENTFUL_DELIVERY_TOKEN!,
    host: import.meta.env.CONTENTFUL_USE_PREVIEW_API
      ? import.meta.env.CONTENTFUL_PREVIEW_API
      : "cdn.contentful.com",
});
