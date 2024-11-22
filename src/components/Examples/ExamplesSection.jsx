import { useState } from "react";
import { EXAMPLES as sample } from "../../coreExamples.js";

import TabButton from "./TabButton.jsx";
import Section from "../Section.jsx";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

    return (
        <Section title="Examples" id="examples">
          <menu> 
              <TabButton 
                isSelected={selectedTopic === 'components'} 
                onSelect={() => handleClick('components')}>
                  Components
                </TabButton>
              <TabButton 
                isSelected={selectedTopic === 'jsx'} 
                onSelect={() => handleClick('jsx')}>
                  JSX
              </TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? 
            (<p>Please select a topic</p>) : 
            (<div id="tab-content">
              <h3>{sample[selectedTopic].title}</h3>
              <p>{sample[selectedTopic].description}</p>
              <pre>
                  <code>{sample[selectedTopic].code}</code>
              </pre>
            </div>)}
        </Section>
    );
}