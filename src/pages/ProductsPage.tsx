import React, { useContext } from "react";
import useProducts from "../hooks/products";
import { ModalContext } from "../context/ModalContext";
import { Iproduct } from "../models";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: Iproduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="grid max-w-4xl grid-cols-3 gap-6 pt-5 pb-3 mx-auto">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new Product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="fixed px-4 py-2 text-2xl text-white bg-red-500 rounded-full bottom-5 right-5"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
