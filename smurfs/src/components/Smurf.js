import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { getSmurf } from '../actions/index';
import Button from '@material-ui/core/button'

import SmurfCreator from './SmurfCreator'
const Smurf = props => {
  return (
    <div>
      {props.smurf && <h1>Here's The Smurfs</h1>}
      {!props.smurf && !props.isFetching && <p>View Existing Smurfs or Create Your Own!</p>}
      {/* {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )} */}
      {props.smurf && !props.isFetching && props.smurf.map(smurf => {
      return <SmurfCreator smurf={smurf} key={smurf.id} />})}
      <Button onClick={props.getSmurf}>UPDATE LIST</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurf);
