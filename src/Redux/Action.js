const ADD_COMMENTS = 'ADD_COMMENTS';
const EDIT = 'EDIT';
const DELETE = 'DELETE';
// const TABLE_DATA ="TABLE_DATA"
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";



const company_data = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          all :action_data 
        }
}
const edit = (e) => {
    return {
        type:EDIT,
        edit:e
    }
}
const remove = (e) => {
    return {
        type:DELETE,
        id:e
    }
 }
//  const table_data = (e) => {
//      console.log(e)
//      return {
//         type:TABLE_DATA,
//         table:e
//      }
//  }
// const loginUser = (payload) => ({
//     console.log(payload);
    
//     type: LOG_IN,
//     payload,
// })

const loginUser = (payload) => {
    console.log(payload);
    
    return {
        type: LOG_IN,
            payload
    }
}

    
    


 
export {company_data, edit, remove, loginUser}