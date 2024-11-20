import { useState } from "react";
import { CORE_CONCEPTS as core } from "./coreData.js";
import { EXAMPLES as sample } from "./coreExamples.js";

import * as images from "./assets/AssetLoader.jsx";

import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header image={images.reactLoadingIMG}/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
            <ul>
              {/* core.map( (conceptItem) => <CoreConcept {...conceptItem} />) */}
            {core.map((conceptItem, index) => (
              <CoreConcept 
                key={index} 
                {...conceptItem} 
                image={
                  [
                    images.componentLoadingIMG,
                    images.configLoadingIMG,
                    images.jsxLoadingIMG,
                    images.stateLoadingIMG
                  ][index]
                } 
              />
            ))}
              {/* <CoreConcept
                  title={core[0].title}
                  description={core[0].description}
                  image={images.componentLoadingIMG}
              />
              <CoreConcept {...core[1]} image={images.configLoadingIMG} />
              <CoreConcept {...core[2]} image={images.jsxLoadingIMG} />
              <CoreConcept {...core[3]} image={images.stateLoadingIMG} /> */}
              </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
