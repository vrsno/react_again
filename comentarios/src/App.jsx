import { TwiterFollowCard } from "./TwiterFollowcard";
import image from "./assets/angelo.jpeg";
import image2 from "./assets/gato.jpeg";
import image3 from "./assets/cubo.jpeg";
import image4 from "./assets/joven.jpeg";
import "./App.css";

function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwiterFollowCard
        formatUserName={formatUserName}
        userName="angelito"
        name="Angel Dorma"
        image={image}
      />
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="Miaui"
        name="Mia Sirnú"
        image={image2}
      />
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="rubix"
        name="cubik rubix"
        image={image3}
      />
      <TwiterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="username"
        name="Angelinho ribunho"
        image={image4}
      />
    </section>
  );
}

export default App;
