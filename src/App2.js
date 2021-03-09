import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import AddAccount, { RemoveAccount } from './personalAction/PersonalAction'
import {useParams} from 'react-router-dom'


const App2 = () => {

  
      const {id} = useParams()
      const dispatch = useDispatch()
      
      const PersonalAccountReducer = useSelector(state => state.PersonalAccountReducer);
      const {personalAccount} = PersonalAccountReducer
      
      const [acc, setAcc] = useState({
          code: '',
          id: id,
          Accountnumber: '',
          active : ''
        })

      const handlSubmit = (e)=> {
        e.preventDefault()
        dispatch(AddAccount(acc))
        setAcc({
            code: '',id: id, Accountnumber: '', active: ''
          })
        }

        const Delete = (account) => {
          dispatch(RemoveAccount(account))
         
        }

        const iteration = personalAccount.filter(a => a.id === id)
        return ( 
          <div>

                  <div className='banks'>
                      <h2 >Bank Account</h2>

                      <form onSubmit={handlSubmit}>

                          <input required placeholder='Code' type="text" value={acc.code} onChange={(e)=> setAcc({...acc, code: e.target.value}) } />
                          <input required placeholder='Account Number' type="text" value={acc.Accountnumber} onChange={e => setAcc({...acc, Accountnumber: e.target.value})} />

                          <span>Active ?</span>
                          <select required  name="cars" id="cars" value={acc.active} onChange={e => setAcc({...acc, active:  e.target.value})}>
                            <option ></option>
                            <option >true</option>
                            <option >false</option>
                          </select>

                          <button className='submitform' >Submit</button>
                      </form>

                      
                
                  </div>
                  <div className="result">
                  {
                    iteration && iteration.map(acc => {
                      return(

                        
                            <div className='singlebank' key ={Math.random()}>
                              <div className="link">
                                <p> Code : <span>{ acc.code}</span> </p>
                                <p> Accountnumber : <span>{ acc.Accountnumber}</span> </p>
                                <p> Active : <span>{acc.active}</span> </p>
                              </div>

                              <div className="submit">
                                <button className='submitbutton' onClick={() => Delete(acc)}> delete </button>
                              </div>
                            </div>
                        
                        
                      )
                    })
                  }
                  </div>
          </div>
     );
}
 
     
export default App2;