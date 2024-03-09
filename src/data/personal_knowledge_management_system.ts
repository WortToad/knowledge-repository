import json2md from "json2md";
import type { TableSection } from "../types";

const table: TableSection = {
  title: "Free and Open-Source Software",
  content: {
    Name: json2md({
      link: { title: "hello", source: "https://ionicabizau.net" },
    }),
    About: json2md({
      link: { title: "hello", source: "https://ionicabizau.net" },
    }),
  },
};

export default table;
