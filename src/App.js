import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import AddBankActions, {RemoveTodoActions} from './BankActions/BankActions';
import {Link,Redirect} from 'react-router-dom'


function App() {

  const [bankInfo, setbankInfo] = useState({
    id : Math.random(),
    code: '',
    name : '',
    active : ''
  })
  const authREducer = useSelector(state => state.authREducer)
  const {user} = authREducer

  const dispatch = useDispatch()

  const BankReducer = useSelector(state => state.BankReducer)
  const {banks} = BankReducer;


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddBankActions(bankInfo))

    setbankInfo({
      id : Math.random(),
      code: '',
      name : '',
      active : ''
    })

  }

  const Delete = (bank) => {
    dispatch(RemoveTodoActions(bank))
   
  }
  if(user && user.length == 0) return <Redirect to='/login' />
  return (
    <div>

          <div className="banks">
                <h2>Banks</h2>

                <form onSubmit={handleSubmit} action="/action_page.php">

                  <input required  placeholder='Code'  type="text" value={bankInfo.code} onChange={e => setbankInfo({...bankInfo, code:  e.target.value})} />
                  <input required  placeholder="Name"  type="text" value={bankInfo.name} onChange={e => setbankInfo({...bankInfo, name:  e.target.value})} />

                  <span>Active ?</span>
                  <select  required  name="cars" id="cars" value={bankInfo.active} onChange={e => setbankInfo({...bankInfo, active:  e.target.value})}>
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                  </select>
                          
                  <button className='submitform' >submit</button>
                </form>
          </div>
            

            <div className="result">
            
              {
                banks && banks.map(bank => {
                  return(
                    <div className='singlebank' key ={bank.id}>

                      <Link className='link' to={`/personal/${bank.id}`}>
                          <p className='firstp'> Code : <span>{ bank.code} </span> </p>
                          <p> Name :  <span>{ bank.name} </span></p>
                          <p> Active :  <span>{bank.active}</span> </p>
                      </Link>
                          
                          <div className="submit">
                          <button className='submitbutton' onClick={() => Delete(bank)}>delete</button>
                          </div>

                    </div>
                  )
                })
              }
            
            </div>
    </div>
    
  );
}

export default App;
