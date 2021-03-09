import Data from '../data.json'


const BankReducer = (state = Data, action) => {
    
    switch(action.type) {
        case 'ADD_BANK' :
            return{
                banks: action.payload
            }
        case 'REMOVE_BANK':
            return{
                banks: action.payload
            }
        default: return state
    }
}

export default BankReducer