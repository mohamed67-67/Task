

const AddBankActions = (bank) => (dispatch, getState) => {
    const {
        BankReducer : {banks},
    }= getState()

    dispatch({
        type : 'ADD_BANK',
        payload: [bank,...banks]
    })
    
}

export default AddBankActions



export const RemoveTodoActions = (bank) => (dispatch, getState) => {
    const {
        BankReducer : {banks},
    } = getState();

    dispatch({
        type: 'REMOVE_BANK',
        payload: banks.filter((b) => b.id !== bank.id) 
    })
}


