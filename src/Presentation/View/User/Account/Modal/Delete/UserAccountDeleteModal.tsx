import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [timer, setTimer] = useState(5);

  React.useEffect(() => {
    if (timer > 0 && isOpen) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer, isOpen]);

  const handleConfirm = () => {
    onConfirm();
    setTimer(5);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle className="!mx-auto !py-0 !pt-10">
        <HighlightOffOutlinedIcon color="error" sx={{ fontSize: 80, color: 'rgb(248 113 113)' }} />
      </DialogTitle>
      <DialogTitle className="!mx-auto !font-body !text-gray-700">Tem certeza disso?</DialogTitle>
      <DialogContent className="!font-body">
        <DialogContentText className="!font-body px-6">
          Essa ação não poderá ser desfeita.
        </DialogContentText>
        <DialogContentText className="!font-body px-6">
          Clique em deletar para prosseguir
        </DialogContentText>
      </DialogContent>
      <DialogActions className="!mx-auto !pb-10 gap-2">
        <Button onClick={onClose} className="!px-4 !py-2 !font-body !tracking-normal !normal-case !bg-neutral-400 !text-white hover:!bg-neutral-500 ">Cancelar</Button>
        <Button onClick={handleConfirm} disabled={timer > 0} className="!px-4 !py-2 !tracking-normal !normal-case !font-body !bg-red-400 !text-white hover:!bg-red-600">
          {`Deletar ${timer > 0 ? '(' + timer + 's)' : ''}`}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountModal;