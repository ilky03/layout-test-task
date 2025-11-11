import { Aside } from "./layouts/Aside";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { Nav } from "./layouts/Nav";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
