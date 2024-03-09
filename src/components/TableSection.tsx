import json2md from "json2md";
import Markdown from "markdown-to-jsx";

export const TableSection = () => {
  const markdown = json2md({
    table: {
      headers: ["Name", "About"],
      rows: [
        {
          Name: json2md({
            link: { title: "hello", source: "https://ionicabizau.net" },
          }),
          About: json2md({
            link: { title: "hello", source: "https://ionicabizau.net" },
          }),
        },
      ],
    },
  });

  return <Markdown>{markdown}</Markdown>;
};
