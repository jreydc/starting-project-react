
import Section from "../Section.jsx";
import { CORE_CONCEPTS as core } from "../../coreData.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConceptSection({images}){
    return (
      <Section title="Core Concepts" id="core-concepts">
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
        </Section>
    );
}

