import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {contentfulClient} from "../lib/contentful.ts";
import MediaLink from "./mediaLink"

const AssetLink = async ({ id, content }) => {
  const asset = await contentfulClient.getAsset(id);

  return (
    asset
      ? <MediaLink file={asset.fields.file} content={content} />
      : <>{documentToReactComponents(content)}</>
  )
}

export default AssetLink;
