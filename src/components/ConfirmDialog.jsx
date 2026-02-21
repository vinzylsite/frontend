import {
 Dialog, DialogTitle, DialogContent, DialogContentText,
 DialogActions, Button
} from "@mui/material";
function ConfirmDialog({ open, title, message,
 onConfirm, onCancel }) {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
            <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onConfirm} color="error"
            variant="contained">Confirm</Button>
            </DialogActions>
        </Dialog>
    );
}

const [dialogOpen, setDialogOpen] = useState(false);
<ConfirmDialog
    open={dialogOpen}
    title="Delete Task?"
    message="This action cannot be undone."
    onConfirm={handleDelete}
    onCancel={() => setDialogOpen(false)}
/>