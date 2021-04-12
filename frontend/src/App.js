import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
