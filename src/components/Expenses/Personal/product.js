import { API, graphqlOperation } from "aws-amplify";

import {
  includeObjectProps,
  replacePropEmptyString,
} from "../../helpers/utilities";

import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../graphql/mutations";

import { getProduct, listProducts } from "../../../graphql/queries";

export const handleCreateProduct = async (data, expensePart) => {
  try {
    const formatedProduct = handleFormatProduct(data, expensePart);

    const result = await API.graphql(
      graphqlOperation(createProduct, { input: { ...formatedProduct } })
    );

    return result.data.createProduct;
  } catch (error) {
    console.error("handle create product", error);
  }
};

export const handleDeleteProduct = async (expensePart) => {
  try {
    const { id } = expensePart;

    const result = await API.graphql(
      graphqlOperation(deleteProduct, { input: { id } })
    );

    return result.data.deleteProduct.id;
  } catch (error) {
    console.error("handle delete product", error);
  }
};

export const handleUpdateProduct = async (data, expensePart) => {
  try {
    const formatedProduct = handleFormatProduct(data, expensePart);

    const result = await API.graphql(
      graphqlOperation(updateProduct, { input: { ...formatedProduct } })
    );

    return result.data.updateProduct;
  } catch (error) {
    console.error("handle update product", error);
  }
};

export const handleFormatProduct = (data, expensePart) => {
  try {
    const productStructure = {
      ...includeObjectProps(data, ["name", "price", "quantity", "frequency"]),
    };

    const newProduct = {
      ...replacePropEmptyString(productStructure),
      productGroceryId: expensePart ? expensePart.natureId : null,
    };

    // expense part is mapped from the product list to include the product id,
    // gorcery id, the expense id and so on; and if the product list is empty
    // it will create a product composed mainly with the grocery id
    // because of that I dont check for the existence of the expensePart itself
    // but the expensePart.id
    if (expensePart.id) {
      const updatedProduct = {
        ...includeObjectProps(expensePart, [
          "id",
          "name",
          "price",
          "quantity",
          "frequency",
        ]),
        ...newProduct,
      };

      return updatedProduct;
    }

    return newProduct;
  } catch (error) {
    console.error("handle format product", error);
  }
};

export const handleListProduct = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(listProducts, { input: {} })
    );

    return result.data.listProducts.items;
  } catch (error) {
    console.error("handle list product", error);
  }
};

export const handleGetProduct = async (id) => {
  try {
    const result = await API.graphql(
      graphqlOperation(getProduct, { input: { id } })
    );

    return result.data.getProduct;
  } catch (error) {
    console.error("handle get product", error);
  }
};
