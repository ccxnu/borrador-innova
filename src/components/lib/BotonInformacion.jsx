import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";
import Information from "../Information/Information";

const BottonInformacion = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenDialog}
        sx={{
          fontSize: "24px",
          color: theme.palette.fourth.main,
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        Solicitar Información
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <Information handleCloseDialog={handleCloseDialog} />
      </Dialog>
    </div>
  );
};

export default BottonInformacion;
