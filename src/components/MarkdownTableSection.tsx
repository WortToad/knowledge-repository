import json2md from "json2md";
import Markdown from "markdown-to-jsx";
import type { TableSection } from "../types";

export const MarkdownTableSection = (props: { data: TableSection }) => {
  const { data } = props;

  if (!data?.length) {
    return;
  }
  const markdown = json2md([
    {
      table: {
        headers: Object.keys(data[0]),
        rows: data,
      },
    },
  ]);

  return <Markdown>{markdown}</Markdown>;
};
