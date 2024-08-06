import { Heading } from "./content/Heading";
import { StaticContent } from "./content/StaticContent";
import { AppContainer } from "./structure/AppContainer";

function App() {
  return (
    <AppContainer>
      <Heading />
      <StaticContent />
    </AppContainer>
  );
}

export default App;
