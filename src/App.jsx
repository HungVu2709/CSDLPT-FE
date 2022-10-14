import "@src/assets/css/index.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
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
