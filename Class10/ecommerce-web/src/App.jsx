import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { About } from "./pages/About/About.jsx";
import { Products } from "./pages/Products/Products.jsx";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Container } from "./components/layout/Container.jsx";
import { useEffect, useState } from "react";
import { GetProductsService } from "./services/productApiService.js";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItemIDs, setCartItemIDs] = useState([]);

  const handleSetProductsSecond = (product) => {
    setProducts([...products, product]);
  };

  const handleAddToCart = (productID) => {
    setCartItemIDs([...cartItemIDs, productID]);
  };

  useEffect(() => {
    GetProductsService.getProducts().then((products) => {
      setProducts(products);
    });

    /**
     * After fetching the products
     * fetch the cart items of that user
     * and populate cartItemIDs state if there is any data
     */
  }, []);

  const mapIDsToProducts = () => {
    return products.filter((product) => cartItemIDs.includes(product._id));

    // TODO:
    // Before returning, maybe use map on add a quantity and increment if that id occures again
    // Later on, whenever you click on delete icon, remove 1 quantity instead of whole product
  };

  const handleRemoveFromCart = (productID) => {
    const filteredCartIDs = cartItemIDs.filter((value) => value !== productID);

    setCartItemIDs(filteredCartIDs);
  };

  return (
    <Container>
      <BrowserRouter>
        <Header cartListCount={cartItemIDs.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/create-product"
            element={
              <CreateProduct
                handleSetProductsSecond={handleSetProductsSecond}
              />
            }
          />

          {/* path params */}
          <Route
            path="/product/details/:id"
            element={<ProductDetails addToCart={handleAddToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                productIDs={cartItemIDs}
                products={mapIDsToProducts()}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
