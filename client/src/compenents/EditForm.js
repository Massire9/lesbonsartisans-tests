import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useControlled,
} from "@mui/material";
import { useEffect, useState } from "react";

const EditForm = (props) => {
  const {
    displayEditModal,
    setDisplayEditModal,
    handleConfirmEditClick,
    product,
  } = {
    ...props,
  };
  console.log(product);
  const [editedProduct, setEditedProduct] = useState({});
  const [typeValue, setTypeValue] = useState("phone");
  const [availableValue, setAvailableValue] = useState(false);
  const handleClose = () => setDisplayEditModal(false);
  const typeProduct = [
    {
      value: "phone",
      label: "Phone",
    },
    {
      value: "tablet",
      label: "Tablet",
    },
    {
      value: "laptop",
      label: "Laptop",
    },
  ];
  const available = [
    {
      value: false,
      label: "Non",
    },
    {
      value: true,
      label: "Oui",
    },
  ];

  useEffect(() => {
    if (product._id) {
      setTypeValue(product.type);
      setAvailableValue(product.available);
    }
  }, [setTypeValue, setAvailableValue]);
  return (
    <Dialog open={displayEditModal} onClose={handleClose}>
      <DialogTitle>Modifier</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nom"
          type="text"
          defaultValue={product.name}
          fullWidth
          onChange={(evt) =>
            setEditedProduct({ ...editedProduct, name: evt.target.value })
          }
          variant="standard"
        />
        <InputLabel id="dropdown-type">Type</InputLabel>
        <Select
          labelId="dropdown-type"
          value={typeValue}
          onChange={(evt) => setTypeValue(evt.target.value)}
        >
          {typeProduct.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          autoFocus
          margin="dense"
          id="rating"
          label="Note"
          type="number"
          defaultValue={product.rating}
          onChange={(evt) =>
            setEditedProduct({ ...editedProduct, rating: evt.target.value })
          }
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Prix"
          type="number"
          defaultValue={product.price}
          fullWidth
          onChange={(evt) =>
            setEditedProduct({ ...editedProduct, price: evt.target.value })
          }
          variant="standard"
        />

        <InputLabel id="dropdown-available">Disponibilité</InputLabel>
        <Select
          labelId="dropdown-available"
          value={availableValue}
          onChange={(evt) => setAvailableValue(evt.target.value)}
        >
          {available.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button
          onClick={() =>
            handleConfirmEditClick(
              product._id,
              Object.assign(product, editedProduct)
            )
          }
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditForm;
