import React from "react"
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, helpers } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";
import MediaLink from "./mediaLink.tsx";
import EntryLink from "./entryLink.tsx";

interface Props { richText: Document }

const RichTextDisplay = ({ richText }: Props) => {

  const options: Options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        const uri: string = node.data.uri.toString();
        const name = helpers.isText(node.content[0]) ? node.content[0].value : '';   //documentToReactComponents(node.content, {})
        return <a href={uri} key={uri} className={'link-color'}>{name}</a>
      },

      [INLINES.ASSET_HYPERLINK]: (node, children) =>
        <MediaLink target={node.data.target} content={node.content[0].toString()} />,

      [BLOCKS.EMBEDDED_ASSET]: (node, children) =>
        <MediaLink target={node.data.target} content={''} />,

      [INLINES.ENTRY_HYPERLINK]: (node) =>
        <EntryLink target={node.data.target} />,

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) =>
        <EntryLink target={node.data.target} />,

      [INLINES.EMBEDDED_ENTRY]: (node, children) =>
        <EntryLink target={node.data.target} />,

      [BLOCKS.HR]: (node, children) => <hr className={'horizontal-line'} />,
    },
  }

  return documentToReactComponents(richText, options);
}

export default RichTextDisplay;