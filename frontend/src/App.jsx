import "./App.css";
import { useRoutes } from "react-router-dom";

//? Pages
import Forside from "./pages/forside/forside.jsx";
import Blog from "./pages/blog/blog.jsx";
import FAQ from "./pages/faq/faq.jsx";
import Kontakt from "./pages/kontakt/kontakt.jsx";

//? Components
import Navigation from "./components/navigation/navigation.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Forside /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:id", element: <Blog /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/kontakt", element: <Kontakt /> },
  ]);

  return (
    <section>
      <Navigation />
      <Header />
      <div>{routes}</div>
      <Footer />
    </section>
  );
}

export default App;
