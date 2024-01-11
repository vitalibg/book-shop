import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";
import ParagraphComponent from "../../../common/paragraph.component";
import TextComponent from "../../../common/text.component";


interface TabComponentProps {
  description: string;
  authors: string;
  reviews: string;
}

const TabComponent = ({ description, authors, reviews }: TabComponentProps) => (
  <Tabs style={{marginBottom: "50px", height: "50px"}}>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Authors</Tab>
      <Tab>Reviews</Tab>
    </TabList>

    <TabPanel>
      <ParagraphComponent text={description} />
    </TabPanel>
    <TabPanel>
      <TextComponent text={authors} />
    </TabPanel>
    <TabPanel>
      <TextComponent text={reviews} />
    </TabPanel>
  </Tabs>
);

export default TabComponent;
