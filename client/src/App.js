import "./App.css";
import { useEffect, useState } from "react";
import ProductTable from "./compenents/ProductTable";
import AddForm from "./compenents/AddForm";
import EditForm from "./compenents/EditForm";
import WarningDialog from "./compenents/WarningDialog";
import API from "./utils/api";

function App() {
  const [products, setProducts] = useState([]); //all products
  const [displayAddModal, setDisplayAddModal] = useState(false); //display dialog form
  const [displayEditModal, setDisplayEditModal] = useState(false); //display dialog form
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false); //display dialog form
  const [idProductDelete, setIdProductDelete] = useState();
  const [product, setProduct] = useState({}); //single product -- update

  const handleAddClick = async () => {
    setDisplayAddModal(true);
  };
  const handleEditClick = async (id) => {
    const product = await API.getProduct(id);
    setProduct(product.data);
    setDisplayEditModal(true);
  };
  const handleDeleteClick = async (id) => {
    setIdProductDelete(id);
    setDisplayDeleteModal(true);
  };

  const handleConfirmAddClick = async (newProduct) => {
    const updatedProduct = await API.addProduct(newProduct);
    setProducts(updatedProduct.data);
    setDisplayAddModal(false);
  };

  const handleConfirmEditClick = async (id, editedProduct) => {
    const updatedProduct = await API.updateProduct(id, editedProduct);
    const index = products.findIndex((product) => product._id === id);
    updatedProduct.data[index] = editedProduct;
    setProducts(updatedProduct.data);
    setDisplayEditModal(false);
  };

  const handleConfirmDeleteClick = async (id) => {
    const updatedProducts = await API.deleteProduct(id);
    setProducts(updatedProducts.data);
    setDisplayDeleteModal(false);
  };

  useEffect(async () => {
    const res = await API.getProducts();
    setProducts(res.data);
  }, [setProducts]);

  return (
    <div className="App">
      <ProductTable
        products={products}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleAddClick={handleAddClick}
      />
      <EditForm
        displayEditModal={displayEditModal}
        setDisplayEditModal={setDisplayEditModal}
        product={product}
        handleConfirmEditClick={handleConfirmEditClick}
      />
      <AddForm
        displayAddModal={displayAddModal}
        setDisplayAddModal={setDisplayAddModal}
        handleConfirmAddClick={handleConfirmAddClick}
      />
      <WarningDialog
        displayDeleteModal={displayDeleteModal}
        setDisplayDeleteModal={setDisplayDeleteModal}
        handleConfirmDeleteClick={handleConfirmDeleteClick}
        idProductDelete={idProductDelete}
      />
    </div>
  );
}

export default App;
