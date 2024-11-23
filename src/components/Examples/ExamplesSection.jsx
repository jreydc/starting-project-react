import { useState } from "react";
import { EXAMPLES as sample } from "../../coreExamples.js";

import TabButton from "./TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";
import TabContent from "../TabContent.jsx";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

    return (
        <Section title="Examples" id="examples">
          <Tabs 
            tabButtons={
              <>
                <TabButton 
                  isSelected={selectedTopic === 'components'} 
                  onClick={() => handleClick('components')}>
                      Components
                  </TabButton>
                <TabButton 
                  isSelected={selectedTopic === 'jsx'} 
                  onClick={() => handleClick('jsx')}>
                      JSX
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'props'} 
                    onClick={() => handleClick('props')}>
                      Props
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'state'} 
                    onClick={() => handleClick('state')}>
                      State
                </TabButton>
              </>
            }>

            {!selectedTopic ? 
              (<TabContent />) : 
              (<TabContent selectedTopic id="tab-content" {...sample[selectedTopic]} />)}
          </Tabs>
        </Section>
    );
}