/*
 src/actions/HelloWorld.js
*/
export const helloWorld = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
   }