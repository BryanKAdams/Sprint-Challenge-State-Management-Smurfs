import React, { useState, useEffect } from 'react';
import axios from 'axios'

// MaterialUI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '35%'
    },
    dense: {
      marginTop: theme.spacing(2),
    },
   
    button: {
        margin: theme.spacing(1),
        marginTop: '2%',
        marginBottom: '4.3%',
        width: '15%'
    },
    input: {
    display: 'none',
    },
    DropdownBoxContainer: {
        marginTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        width: '35%',
        justifyContent: "space-around"
    },
    DropdownBox: {
     width: '200px',
        
    }
  }));



const UpdateForm = props => {
    console.log(props.smurf, "edit")
    const classes = useStyles();
    const [ready, setReady] = useState("")
    const [item, setItem] = useState({
        name: "",
        age: "",
        height: "",     
    });
    useEffect(() => {
        setItem(props.smurf)
    }, [props.smurf]);

const submitHandler = event => {
    event.preventDefault();
    
    axios
        .put(`http://localhost:3333/smurfs/${props.smurf.id}`, item)  
        .then(res => {console.log(res); setReady("ready")})
        .catch(err => console.log(err.response))
        props.handleClose()
    
    console.log(item, "Edit Form submit handler")
}



const changeHandler = event => {
    setItem({ ...item, [event.target.name]: event.target.value })
}


return (
       
    <div>
        
        <h1>Edit your Smurf</h1>
        <form className ={classes.container} onSubmit ={submitHandler}>
            
        <TextField
                
                label = "New Name"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="name"
                value={item.item_name}
                onChange={changeHandler}
                
                />
          
            <TextField
                
                label = "New Age"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="age"
                value={item.item_description}
                onChange={changeHandler}
                />
           
           <TextField
                
                label = "New Height"
                variant ="outlined"
                margin="normal"
                className={classes.textField}
                type = "text"
                name="height"
                value={item.category}
                onChange={changeHandler}
                />
           
         
            
         
            
            <Button className={classes.button} variant="outlined"type ="submit">Edit Your Smurf</Button>
        </form>
    </div>

)

}
  





export default UpdateForm;