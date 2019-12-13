import React from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { FormikTextField } from "formik-material-fields"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect} from "react-redux"
import { lightBlue } from '@material-ui/core/colors';
import {postSmurf} from '../actions/index'
const PostItem = () => {

    const useStyles = makeStyles(theme => ({
        '@global': {
            body: {
                backgroundColor: theme.palette.common.white,
            },
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            backgroundColor: lightBlue[200],
            '&:hover': {
                backgroundColor: lightBlue[300],
            }
        },
    }));
    const classes = useStyles();



    return (
        <Container componenet="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create Your Own Smurf
                </Typography>
                <Form className={classes.form} noValidate>
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="name" autoComplete="smurf" placeholder="Smurf Name *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="height" autoComplete="height" placeholder="Smurf Height *" />
                    <FormikTextField variant="outlined" margin="normal" fullWidth type="text" name="age" autoComplete="age" placeholder="Smurf Age" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create Your Smurf
                    </Button>


                </Form>
            </div>  
        </Container>
    );
};





const FormikPostItem = withFormik({
    mapPropsToValues({ name, height, age}) {
        return {
         
            name: name || "",
            height: height || "",
            age: age || "",
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(2, 'Too short!').max(32, 'Too Long!').required("Please enter the name of your item"),
        height: Yup.string().min(2, 'Too short!').max(144, 'Too Long!').required("Please enter a description"),
        age: Yup.string().min(2, 'Too short!').max(32, 'Too Long!').required("Please specify a category")
    }),

    handleSubmit(values, {resetForm, props }) {
        //values is our object with all our data on it
        // console.log("props in post request", values)
    props.postSmurf(values);
    console.log(values);
    resetForm();
    props.history.push("/")
    }
})(PostItem);



export default connect(null, { postSmurf })(FormikPostItem); 
