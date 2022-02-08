import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const WarningDialog = (props) => {
  const {
    handleConfirmDeleteClick,
    displayDeleteModal,
    setDisplayDeleteModal,
    idProductDelete,
  } = { ...props };

  const handleClose = () => {
    setDisplayDeleteModal(false);
  };
  return (
    <Dialog open={displayDeleteModal} onClose={handleClose}>
      <DialogTitle>{"Suppression"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Voulez-vous vraiment supprimer cet appareil ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button
          onClick={() => handleConfirmDeleteClick(idProductDelete)}
          autoFocus
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default WarningDialog;
