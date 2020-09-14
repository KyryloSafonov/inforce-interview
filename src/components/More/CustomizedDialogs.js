import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import './more.css';
import OutlinedCard from "../Card/Card";

export default function CustomizedDialogs(props) {
    const {openMore, setOpenMore, obj, similar} = props

    const handleClose = () => {
        setOpenMore(false)
    }

    return (
        <Dialog className="size" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openMore}>
            <DialogActions onClick={handleClose}>
                <CloseIcon/>
            </DialogActions>

            <DialogTitle id="customized-dialog-title">
                {obj.title}
            </DialogTitle>
            <DialogContent>
                <h5>Description:</h5>
                <Typography gutterBottom>
                    {obj.desc}
                </Typography>
                <h5>Date:</h5>
                <Typography gutterBottom>
                    {obj.date}
                </Typography>
                <hr/>
                <h5>Similar Announcements</h5>
                <div className='d-flex flex-wrap'>
                    {similar.map((item) => (
                        <OutlinedCard className='mx-2 my-2' cardVariant={'uncontrolled'} key={item.id + 'k'}
                                      title={item.title} desc={item.desc} date={item.date}/>
                    ))}
                </div>

            </DialogContent>

        </Dialog>
    );
}
