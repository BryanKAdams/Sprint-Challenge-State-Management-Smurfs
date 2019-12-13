import React from 'react'

//MUI STYLES
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { deleteSmurf } from '../actions/'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import UpdateForm from './UpdateForm'
import Modal from '@material-ui/core/Modal'




const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        textAlign: "center",
        margin: "0 Auto"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    modalBox: {
        height: "25",
        width: 600,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: "center",
        margin: '0 Auto'
      },
}))

let showForm = false
const SmurfCreator = props => {
    const [open, setOpen] = React.useState(false);
    // const [openAccount, setOpenAccount] = React.useState(false);
    // const [postTool, setPostTool] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const classes = useStyles();
    console.log(props.smurf)
    return (
        <div>
            <h1>Name: {props.smurf.name}</h1>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
            <h4>Order Created: {props.smurf.id}</h4>
            <Button onClick={() => { props.deleteSmurf(props.smurf.id) }}>Remove this Smurf</Button>
            <Button onClick = {handleOpen}>Edit Your Smurf</Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.flex}
            >
                <div className={classes.modalBox}>
                    <UpdateForm handleClose={handleClose} {...props} smurf={props.smurf} />
                </div>
            </Modal>


        </div>
    )

}


export default connect(null, { deleteSmurf })(SmurfCreator);