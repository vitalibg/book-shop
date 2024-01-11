import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";
import ParagraphComponent from "../../../common/paragraph.component";
import TextComponent from "../../../common/text.component";
import style from "./tab.module.css";

interface TabComponentProps {
  description: string;
  authors: string;
}

const TabComponent = ({ description, authors }: TabComponentProps) => (
  <Tabs className={style.container}>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Authors</Tab>
    </TabList>

    <TabPanel>
      <ParagraphComponent text={description} />
    </TabPanel>
    <TabPanel>
      <TextComponent text={authors} />
    </TabPanel>
  </Tabs>
);

export default TabComponent;
