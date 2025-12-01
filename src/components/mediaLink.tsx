import React from "react"
import type { Link } from "@contentful/rich-text-types";
import { contentfulClient } from "../lib/contentful.ts";

interface Props {
  target: Link<'Asset'>,
  content: string,
}

const MediaLink = async ({ target, content } : Props) => {
  const asset = await contentfulClient.getAsset(target.sys.id);

  if (!asset || !asset.fields || !asset.fields.file) {
    return <></>;
  }

  const file= asset.fields.file;
  const aspectRatio = file.details.image?.height !== undefined && file.details.image?.width !== undefined
    ?  file.details.image?.width / file.details.image?.height
    : undefined;

  let imageClass = '';
  switch(aspectRatio?.toFixed(2)) {
    case '0.33': imageClass = 'is-1by3'; break;
    case '0.50': imageClass = 'is-1by2'; break;
    case '0.56': imageClass = 'is-9by16'; break;
    case '0.60': imageClass = 'is-3by5'; break;
    case '0.67': imageClass = 'is-2by3'; break;
    case '0.75': imageClass = 'is-3by4'; break;
    case '0.80': imageClass = 'is-4by5'; break;
    case '1.00': imageClass = 'is-1by1'; break;
    case '1.25': imageClass = 'is-5by4'; break;
    case '1.33': imageClass = 'is-4by3'; break;
    case '1.50': imageClass = 'is-3by2'; break;
    case '1.60': imageClass = 'is-5by3'; break;
    case '1.78': imageClass = 'is-16by9'; break;
    case '2.00': imageClass = 'is-2by1'; break;
    case '3.00': imageClass = 'is-3by1'; break;
    default: imageClass = '';
  }

  return (
    file.contentType.startsWith('image')
      ? <div className={`image ${imageClass}`}>
          <img
            src={file.url}
            alt={content}
            decoding={'async'}
            loading={'lazy'}
            height={file.details.image?.height}
            width={file.details.image?.width}
          />
        </div>
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

export default MediaLink;
