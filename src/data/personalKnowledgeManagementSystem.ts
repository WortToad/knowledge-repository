import json2md from "json2md";
import type { TableSection } from "../types";

export const personalKnowledgeManagementSystem: TableSection[] = [
  {
    Name: json2md({
      link: { title: "Logseq", source: "https://logseq.com/" },
    }),
    About:
      "A privacy-first, open-source platform for knowledge management and collaboration.",
  },
  {
    Name: json2md({
      link: { title: "anytype", source: "ttps://anytype.io/" },
    }),
    About:
      "Anytype is a personal knowledge base, a digital brain that allows you to quickly capture, describe, and connect information. You can use Anytype to create books, tasks, notes, ideas, documents, tools and organize them any way you want.",
  },
];
