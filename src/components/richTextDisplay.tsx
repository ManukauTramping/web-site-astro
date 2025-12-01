import React from "react"
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, helpers } from "@contentful/rich-text-types";
import type { Document, Inline, Block, Link } from "@contentful/rich-text-types";
import AssetLink from "./assetLink.js";

interface Props { richText: Document }

const RichTextDisplay = ({ richText }: Props) => {

  const options: Options = {
    renderNode: {
      [INLINES.ASSET_HYPERLINK]: (node, children) =>
        <AssetLink target={node.data.target} content={node.content[0]} />,

      [INLINES.HYPERLINK]: (node) => {
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