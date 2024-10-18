import "../src/index.css";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Hero from "./components/hero/hero";
import WishesForm from "./components/wishesForm/wishesForm";

function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Gallery></Gallery>
      <WishesForm></WishesForm>
      <Footer></Footer>
    </>
  );
}
export default App;
