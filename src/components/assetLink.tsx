import React from "react"
import type { Block, Inline, Link, Text } from "@contentful/rich-text-types";
import { contentfulClient } from "../lib/contentful.ts";

interface Props {
  target: Link<'Asset'>,
  content: string,
}

const AssetLink = async ({ target, content } : Props) => {
  const asset = await contentfulClient.getAsset(target.sys.id);

  if (!asset || !asset.fields || !asset.fields.file) {
    return <></>;
  }

  const file= asset.fields.file;
  return (
    file.contentType.startsWith('image')
      ? <img
          src={file.url}
          alt={content}
          decoding={'async'}
          loading={'lazy'}
          height={file.details.image?.height}
          width={file.details.image?.width}
        />
      : <a
          href={file.url}
          type={file.contentType}
          download
          className={'link-color'}
          target={'_blank'}
        >
          {file.fileName}
        </a>
  )
}

export default AssetLink;
