import "@src/assets/css/index.css";

import { RoutesProvider } from "@src/routes";
import { GlobalStyle } from "@src/theme";

function App() {
  return (
    <>
      <RoutesProvider />
      <GlobalStyle />
    </>
  );
}

export default App;
