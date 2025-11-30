import React from "react"
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import {INLINES, helpers, type Document, MARKS, BLOCKS} from "@contentful/rich-text-types"
import MediaLink from "./mediaLink"
import AssetLink from "./assetLink"

interface Props { richText: Document }

const RichTextDisplay = ({ richText }: Props) => {

  const options: Options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const target = node.data.target
        return target.fields
          ? <MediaLink file={target.fields.file['en-NZ']} content={node.content[0]} />
          : <AssetLink id={target.sys.id} content={node.content[0]} />
      },

      [INLINES.HYPERLINK]: (node, children) => {
        const uri: string = node.data.uri.toString();
        const name = helpers.isText(node.content[0]) ? node.content[0].value : '';   //documentToReactComponents(node.content, {})
        return <a href={uri} key={uri} className={'link-color'}>{name}</a>
      },

      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const target = node.data.target
        //const contentTypeId = target.sys.contentType.sys.id

        // if (contentTypeId === 'information-page')
        //   return RenderPageEntry(target.fields)
        // else if (contentTypeId === 'contact')
        //   return RenderContactEntry(target.fields)
        // else
        return []; //documentToReactComponents(node.content)
      },

      [BLOCKS.HR]: (node, children) => <hr className={'horizontal-line'} />,
    },
  }

  return documentToReactComponents(richText, options);
}

export default RichTextDisplay;