

const AddAccount = (account) => (dispatch,getState) => {

    const {
        PersonalAccountReducer : {personalAccount},
    } = getState();

    dispatch({
        type : 'ADD_ACCOUNT',
        payload : [account,...personalAccount]
    })
}


 
export default AddAccount;

export const RemoveAccount = (account) => (dispatch, getState) => {

    const {
        PersonalAccountReducer : {personalAccount},
    } = getState();

    dispatch({
        type:  'REMOVE_ACCOUNT',
        payload : personalAccount.filter(acc => acc.Accountnumber !== account.Accountnumber)
    })
}

