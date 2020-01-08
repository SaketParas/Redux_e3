const ADD_COMMENTS = "ADD_COMMENTS"
// const TABLE_DATA ="TABLE_DATA";
const EDIT = 'EDIT';
const DELETE = 'DELETE';

const initiState = {
    stored_data : [],
    // table:[]
}
const stored_data = (state=initiState , action) => {
    
    switch(action.type){

        case ADD_COMMENTS :
            console.log(state,action)
            return{
                ...state,
                stored_data: [...state.stored_data, action.all]
            }

            case EDIT:
                let newState = {...state}
                let data = newState.stored_data.filter((e)=> e.company_id !== action.edit.company_id)
                data.push(action.edit)
               // console.log(data)
               data = data.sort( (a,b) => {
                   return a.company_id - b.company_id
               })

                return {
                    ...state,
                    stored_data:data     
                }

                case DELETE: 
                return{
                    ...state,
                    stored_data: state.stored_data.filter((e) => e.company_id !== action.id)
                } 
            // *******************************
            
        //  case TABLE_DATA: 
        //      return {
        //          ...state,
        //          table: [...state.table, action.table]
        //      }   
            //  ************

            default:
            return state
    }
}
export default stored_data