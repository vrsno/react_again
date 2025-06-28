import { TwiterFollowCard } from "./TwiterFollowcard";
import image from "./assets/angelo.jpeg";
import image2 from "./assets/gato.jpeg";

import "./App.css";

function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwiterFollowCard
        initialIsFollowiing={true}
        formatUserName={formatUserName}
        userName="angelito"
        image={image}
      >
        Angelito
      </TwiterFollowCard>
      <TwiterFollowCard
        formatUserName={formatUserName}
        userName="Miaui"
        image={image2}
      >
        Miaui
      </TwiterFollowCard>
    </section>
  );
}

export default App;
