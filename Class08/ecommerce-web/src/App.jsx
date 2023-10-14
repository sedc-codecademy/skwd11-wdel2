import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Products } from "./pages/Products/Products.jsx";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Container } from "./components/layout/Container.jsx";
import { useEffect, useState } from "react";
import { GetProductsService } from "./services/productApiService.js";

function App() {
  const [products, setProducts] = useState([]);

  // Solution 1 for refatching
  const handleSetProducts = (products) => {
    setProducts(products);
  };

  // Solution 2 when just updating the state with the product
  const handleSetProductsSecond = (product) => {
    setProducts([...products, product]);
  };

  useEffect(() => {
    GetProductsService.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/create-product"
            element={
              <CreateProduct
                setProducts={handleSetProducts}
                handleSetProductsSecond={handleSetProductsSecond}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
