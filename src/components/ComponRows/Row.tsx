import React from 'react';
import iconlist from '../img/iconlist.svg';
import iconbasket from '../img/iconbasket.svg';
import { useMutation, useQueryClient } from 'react-query';
import RowChild from './RowChild';
import { MyAppContext } from '../Reducer/Reducer';
import InputRow from '../ComponInput/InputRow';
import Utilits from '../Utilitis/Utilits';
import {deletedRow}  from '../API/QueryesList';

export default function Row({data}:any) {
const queryQlient = useQueryClient()
const utilit = Utilits()
const {state, dispatch}=React.useContext<any>(MyAppContext)  
const [togel, setTogel]=React.useState(false)
const [value, setValue]=React.useState()  
const delRow=useMutation({
    mutationFn:(id):any=>{
        if(state.update!==false){
            deletedRow(id)
        }
    },
    onSuccess: ()=>{
        setTimeout(()=>{
            queryQlient.invalidateQueries(['list'])
        },500)
    }
})


  return (<>
  {
    data.map((item:any)=><div key={item.id}>
        <div className='str1'> 
            <div className='str1-logo'>
                <img 
                src={iconlist} alt='logo'
                onClick={()=>{[setTogel(!togel), setValue(item.id)]}}
                />
                <img 
                src={iconbasket} 
                alt='logo' 
                className='basket'
                onClick={()=>{delRow.mutate(item.id)}}
                /> 
            </div>
            {
                utilit.func1(item)
            }
            </div>
        {togel ? value === item.id ? <InputRow parentId={item.id}/> : null : null}
        <RowChild child={item} cl="str2"/>
    </div>)
  }
  
  </>
  )
}
