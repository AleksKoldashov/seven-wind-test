import React, { useState } from 'react'
import iconlist from '../img/iconlist.svg';
import iconbasket from '../img/iconbasket.svg';
import InputRow from '../ComponInput/InputRow';
import { useMutation, useQueryClient } from 'react-query';
import { MyAppContext } from '../Reducer/Reducer';
import Utilits from '../Utilitis/Utilits';
import { deletedRow } from '../API/QueryesList';

export default function RowChild({child, cl}:any) {
const {state, dispatch}=React.useContext<any>(MyAppContext)    
const utilit = Utilits()
  const queryQlient = useQueryClient()
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
const [togel, setTogel]=useState(false)
const [value, setValue]=useState()  

  return <>
{ 
   child.child.map((item:any)=><div key={item.id}>
   {
   <div key={item.id}>
        <div className={cl}>
            <div className={`${cl}-logo-child`}>
                <img 
                src={iconlist} alt='logo'
                onClick={()=>{[setTogel(!togel), setValue(item.id)]}}
                />
                <img 
                src={iconbasket} 
                alt='logo' 
                className='basket'
                onClick={()=>{delRow.mutate(item.id);
                }}
                /> 
            </div>
            {
               utilit.func1(item)
            }
        </div> 
        {togel ? value === item.id ? <InputRow parentId={item.id}/> : null : null}
        <RowChild child={item} cl="str3"/>
    </div> 
   }
    </div>)
}
  </>
}
