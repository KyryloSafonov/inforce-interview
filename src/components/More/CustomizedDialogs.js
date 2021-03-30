import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import './more.css';
import OutlinedCard from "../Card/Card";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function CustomizedDialogs(props) {
    const {openMore, setOpenMore, obj, similar} = props

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')


    const handleClose = () => {
        setOpenMore(false)
    }

    return (
        <Dialog className="size" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openMore}>
            {obj.id}
            <DialogActions onClick={handleClose}>
                <CloseIcon/>
            </DialogActions>

            <img src={obj.imageURL} alt=""/>
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
                <h5>Write your comment:</h5>
                <Typography gutterBottom className="comment">
                    <TextField
                        id="filled-full-width"
                        style={{ margin: 8 }}
                        placeholder="Your Comment..."
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button variant="contained"
                            color="primary"
                            onClick={() => {
                                setComments([...comments,comment])
                                setComment('')
                            }}>
                        Add Comment
                    </Button>
                </Typography>
                <hr/>
                <p className='comments'>Comments: </p>
                {comments.map(e => <p className='commentsList'>{e}</p>)}
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
