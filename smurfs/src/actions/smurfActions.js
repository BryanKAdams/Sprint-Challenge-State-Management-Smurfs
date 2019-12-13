import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCC = 'FETCH_SMURF_SUCC';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const POST_SMURF_SUCC = 'POST_SMURF_SUCC';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';
export const UPDATING_SMURF_PROFILE = 'UPDATING_SMURF_PROFILE';

//Dispatch actions
export const getSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({type: FETCH_SMURF_SUCC, payload: res.data });
    })
    .catch(err => {dispatch({type: FETCH_SMURF_FAIL, payload: err.response})})
}
export const postSmurf = data => dispatch => {
    axios
      .post(`http://localhost:3333/smurfs`, data)
      .then(res => {
        dispatch({type: "POST_SMURF_SUCC", payload: data})
      })
      .catch(err => {
        dispatch({type: "POST_SMURF_FAIL", payload: err.response})
      })
  }

  export const deleteSmurf = data => dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${data}`)
      .then(res => {
        dispatch({type: "FETCH_SMURF_SUCC", payload: res.data});
      })
      .catch(err => {
        dispatch({type: "FETCH_SMURF_FAIL", payload: err.response})
      });
  }
  export const updateSmurf = data => dispatch => {
    axios
      .put(`http://localhost:3333/smurfs/${data}`, data)
      .then(res => {
        console.log(res)
        dispatch({type: "UPDATING_SMURF_PROFILE", payload: res.data});
      })
      .catch(err => {
        dispatch({type: "FETCH_SMURF_FAIL", payload: err.response})
      });
  }  