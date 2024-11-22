import { Fragment } from "react";
import * as images from "./assets/AssetLoader.jsx";

import CoreConceptSection from "./components/CoreConcepts/CoreConceptSection.jsx";
import ExamplesSection from "./components/Examples/ExamplesSection.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <Fragment>{//or shorthand Fragment <>
      }
      <Header image={images.reactLoadingIMG}/>
      <main>
        <CoreConceptSection images={images}/>
        <ExamplesSection />
      </main>
    </Fragment>// </>
  );
}

export default App;
