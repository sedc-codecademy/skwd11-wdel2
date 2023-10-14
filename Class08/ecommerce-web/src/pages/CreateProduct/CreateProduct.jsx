import { useState } from "react";
import { categories } from "../../utils/shared/categories.const.js";
import { GetProductsService } from "../../services/productApiService.js";

export const CreateProduct = ({ setProducts, handleSetProductsSecond }) => {
  const [draftProduct, setDraftProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    productCategory: "",
  });

  // DRY => Do not reapeat yourself
  const onValueChange = (value, propValue) => {
    setDraftProduct({
      ...draftProduct,
      [propValue]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Instead of creating an literal object, we can have class entity for product
    // and create new instance of it
    const product = {
      productName: draftProduct.productName,
      productDescription: draftProduct.productDescription,
      productPrice: Number(draftProduct.productPrice),
      productImage: draftProduct.productImage,
      productCategory: draftProduct.productCategory,
    };

    // TODO: Make the api call to save the product in the DB
    console.log("product to be created:", product);
    try {
      const id = await GetProductsService.createProduct(product);

      // 1. After we success create the product, use re-fetch method so we can see the up to date
      // value
      // const newlyProducts = await GetProductsService.getProducts();
      // console.log("Newly fetched products:", newlyProducts);
      // setProducts(newlyProducts);

      // 2. After we success create the product, update the state without refetching, containing the product with the
      // new value

      handleSetProductsSecond({
        _id: id,
        name: product.productName,
        description: product.productDescription,
        imageUrl: product.productImage,
        category: product.productCategory,
        price: product.productPrice,
      });
    } catch (error) {
      console.log("Error happened");
    }
  };

  return (
    <>
      <form>
        <div className="inputsContainer">
          <input
            type="text"
            placeholder="Product Name"
            onChange={(event) =>
              onValueChange(event.target.value, "productName")
            }
            value={draftProduct.productName}
          />
          <input
            type="text"
            placeholder="Product Description"
            onChange={(event) =>
              onValueChange(event.target.value, "productDescription")
            }
            value={draftProduct.productDescription}
          />
          <input
            type="text"
            placeholder="Product Price"
            onChange={(event) =>
              onValueChange(event.target.value, "productPrice")
            }
            value={draftProduct.productPrice}
          />
          <input
            type="text"
            placeholder="Product Image"
            onChange={(event) =>
              onValueChange(event.target.value, "productImage")
            }
            value={draftProduct.productImage}
          />
        </div>

        <div>
          <select
            onChange={(event) =>
              onValueChange(event.target.value, "productCategory")
            }
            value={draftProduct.productCategory}
          >
            <option value={""} disabled>
              Please select category
            </option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button onClick={handleSubmit}>Create Product</button>
        </div>
      </form>
    </>
  );
};
