export class ProductPropsMapper {
  static mapToCreateProductProps(createProductDTO) {
    return {
      name: createProductDTO.productName,
      description: createProductDTO.productDescription,
      price: createProductDTO.productPrice,
      imageUrl: createProductDTO.productImage,
      category: createProductDTO.productCategory,
    };
  }
}
