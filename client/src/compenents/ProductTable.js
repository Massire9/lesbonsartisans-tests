import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton } from "@mui/material";

const ProductTable = (props) => {
  const { products, handleAddClick, handleEditClick, handleDeleteClick } = {
    ...props,
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Note</TableCell>
              <TableCell align="right">Prix</TableCell>
              <TableCell align="right">Temps de garantie</TableCell>
              <TableCell align="right">Disponibilité</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow key={row._id}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">
                  {row.type[0].toUpperCase() + row.type.substring(1)}
                </TableCell>
                <TableCell align="right">{row.rating} ★</TableCell>
                <TableCell align="right">{row.price}€</TableCell>
                <TableCell align="right">
                  {row.warranty_years} {row.warranty_years > 1 ? "ans" : "an"}
                </TableCell>
                <TableCell align="right">
                  {row.available ? "Oui" : "Non"}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleEditClick(row._id)}
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteClick(row._id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Ajouter
      </Button>
    </>
  );
};

export default ProductTable;
