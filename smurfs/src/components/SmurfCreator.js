import React from 'react'

//MUI STYLES
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {deleteSmurf, updateSmurf} from '../actions/'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import UpdateForm from './UpdateForm'




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
}))
const SmurfCreator = props => {
    const classes = useStyles();
    console.log(props.smurf)
    return (
        // <Card className={classes.card}>
        //     <h1>{props.person.name.title} {props.person.name.first} {props.person.name.last}</h1>
        //     <CardMedia
        //         className={classes.media}
        //         image={props.person.picture.large}
        //         title="Paella dish"
        //     />
        //     <CardContent>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //             This impressive paella is a perfect party dish and a fun meal to cook together with your
        //             guests. Add 1 cup of frozen peas along with the mussels, if you like.
        // </Typography>
        //     </CardContent>
        // </Card>
        <div>
            <h1>Name: {props.smurf.name}</h1>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
            <h4>Order Created: {props.smurf.id}</h4>
            <Button onClick={() => {props.deleteSmurf(props.smurf.id)}}>Remove this Smurf</Button>
            <UpdateForm id={props.smurf.id}/>
            
        </div>
    )

}

export default connect(null, {deleteSmurf, updateSmurf})(SmurfCreator);