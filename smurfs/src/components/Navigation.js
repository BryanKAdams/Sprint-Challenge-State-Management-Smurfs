import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const navigation = () => {
    return (
        <div>
            <Button><Link to="/">View Smurfs</Link></Button>
            <Button><Link to="/createsmurf">Create Your Own Smurf</Link></Button>
        </div>)
};
export default navigation