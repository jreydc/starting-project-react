import * as images from "./assets/AssetLoader.jsx";
import { CORE_CONCEPTS as core } from "./coreData.js";
import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div>
      <Header image={images.reactLoadingIMG}/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
            <ul>
              <CoreConcept
                  title={core[0].title}
                  description={core[0].description}
                  image={images.componentLoadingIMG}
              />
              <CoreConcept {...core[1]} image={images.configLoadingIMG} />
              <CoreConcept {...core[2]} image={images.jsxLoadingIMG} />
              <CoreConcept {...core[3]} image={images.stateLoadingIMG} />
              </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
