import React from "react"
import { type Link } from "@contentful/rich-text-types";
import {ContactContentTypeId, contentfulClient, PageContentTypeId} from "../lib/contentful.ts";

interface Props {
  target: Link<'Entry'>,
}

const EntryLink = async ({ target } : Props) => {
  const entry = await contentfulClient.getEntry(target.sys.id);

  if (!entry) {
    return <></>;
  }

  if (entry.sys.contentType.sys.id === PageContentTypeId) {
    const url = entry.fields.slug === '/'
      ? '/index'
      : `/${entry.fields.slug}`;
    const name = entry.fields.name?.toString();
    return <a href={url} key={url} className={'link-color'}>{name}</a>;
  }

  if (entry.sys.contentType.sys.id === ContactContentTypeId) {
    return (
      <span>
        <b>{entry.fields.name?.toString()}</b> - {entry.fields.phoneNumber?.toString()}
      </span>
    );
  }

  return <></>;
}

export default EntryLink;
