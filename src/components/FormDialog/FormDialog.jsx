import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {

    const {open, handleClose, title, desc, date, handleTitle, handleDesc, handleDate, save, variant} = props

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    {variant}
                </DialogTitle>

                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={handleTitle}
                    />
                    <TextField
                        margin="dense"
                        id="desc"
                        label="Description"
                        type="text"
                        fullWidth
                        value={desc}
                        onChange={handleDesc}
                    />
                    <TextField
                        className='my-5'
                        id="datetime-local"
                        label="Add Date"
                        type="datetime-local"
                        defaultValue="2020-10-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date}
                        onChange={handleDate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        save(variant, props.id)
                        handleClose()
                    }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
