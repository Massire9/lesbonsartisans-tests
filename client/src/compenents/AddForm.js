import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const AddForm = (props) => {
  const { displayAddModal, setDisplayAddModal, handleConfirmAddClick } = {
    ...props,
  };
  const [newProduct, setNewProduct] = useState({});
  const [typeValue, setTypeValue] = useState("phone");
  const [availableValue, setAvailableValue] = useState(false);

  const handleClose = () => setDisplayAddModal(false);
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
  return (
    <Dialog open={displayAddModal} onClose={handleClose}>
      <DialogTitle>Modifier</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nom"
          type="text"
          fullWidth
          onChange={(evt) =>
            setNewProduct({ ...newProduct, name: evt.target.value })
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
          onChange={(evt) =>
            setNewProduct({ ...newProduct, rating: evt.target.value })
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
          fullWidth
          onChange={(evt) =>
            setNewProduct({ ...newProduct, price: evt.target.value })
          }
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Temps de garantie (en année)"
          type="number"
          fullWidth
          onChange={(evt) =>
            setNewProduct({ ...newProduct, warranty_years: evt.target.value })
          }
          variant="standard"
        />

        <InputLabel id="dropdown-available">Disponibilité</InputLabel>
        <Select
          labelId="dropdown-available"
          value={availableValue}
          onChange={(evt) => setAvailableValue(() => evt.target.value)}
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
            handleConfirmAddClick({
              ...newProduct,
              type: typeValue,
              available: availableValue,
            })
          }
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddForm;
