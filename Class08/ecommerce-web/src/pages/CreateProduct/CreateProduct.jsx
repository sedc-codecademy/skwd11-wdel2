import { useState } from "react";

export const CreateProduct = () => {
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

  const categories = [
    "Women Clothing",
    "Men Clothing",
    "Entertainment",
    "Techonology",
    "Books",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      productName: draftProduct.productName,
      productDescription: draftProduct.productDescription,
      productPrice: Number(draftProduct.productPrice),
      productImage: draftProduct.productImage,
      productCategory: draftProduct.productCategory,
    };

    // TODO: Make the api call to save the product in the DB
    console.log("product to be created:", product);
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
