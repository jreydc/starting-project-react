import * as images from "./assets/AssetLoader.jsx";
import { CORE_CONCEPTS as core } from "./coreData.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"]

function genRandomInt(max){
  return Math.floor(Math.random() * (max));
}

function Header(){
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
        <img src={images.reactLoadingIMG} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  );
}

function CoreConcept({image, title, description}){
  return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}

function App() {
  return (
    <div>
      <Header />
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
