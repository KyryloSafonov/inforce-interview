import React from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';

import './card.css';
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";


export default function OutlinedCard(props) {

    const {
        announcement,
        openDialog,
        openSettings,
        el,
        setAnnoun,
        date,
        desc,
        id,
        setDate,
        setDesc,
        setId,
        setTitle,
        title,
        setOpenMore,
        setObj,
        searchSimilar,
        cardVariant,
        className
    } = props

    const deleteCard = (id) => {
        const filtered = announcement.filter((el) => (el.id !== id))
        setAnnoun(filtered);
    }
    return (
        <Card className={`root ${className}`} variant="outlined">
            {
                cardVariant === 'uncontrolled' ? //варіант картки
                    ''
                    :
                    <div className='navigate'>
                        <IconButton className={openSettings ? '' : 'd-none'} onClick={() => {
                            setTitle(el.title)
                            setDate(el.date)
                            setDesc(el.desc)
                            setId(el.id)
                            openDialog('edit')
                        }}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton className={openSettings ? '' : 'd-none'} onClick={() => (deleteCard(id))}>
                            <HighlightOffIcon/>
                        </IconButton>
                    </div>
            }

            <CardContent>
                <Typography className='card-title' gutterBottom>
                    {title}
                </Typography>
                <Typography className='pos'>
                    {desc}
                </Typography>
                <div className='more'>
                    {
                        cardVariant === 'uncontrolled' ?
                            ''
                            :
                            <Button onClick={() => {
                                setOpenMore(true)
                                setObj(el)
                                searchSimilar(el)
                            }}>
                                More
                            </Button>
                    }

                    <Typography className='date' variant="body2" component="p">
                        {date}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
