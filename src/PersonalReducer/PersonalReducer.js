


const PersonalReducer = ( state = {personalAccount : [] }, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT' :
            return{
                personalAccount: action.payload
            }
        case 'REMOVE_ACCOUNT' :
            return {
                personalAccount : action.payload
            }
        default : return state
    }
}
 
export default PersonalReducer;