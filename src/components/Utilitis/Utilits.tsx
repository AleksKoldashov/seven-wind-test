import InputCell from "../ComponInput/InputCell"
import React from 'react'
import { MyAppContext } from "../Reducer/Reducer"

export default function Utilits() {

const {state, dispatch}=React.useContext<any>(MyAppContext)   

const func1=(item:any)=>{
        const arrKey:string []=['rowName','salary','equipmentCosts','overheads','estimatedProfit']
return  <>
        {
        arrKey.map((i:string, index:number)=><>
            <div 
            className='str1-content'
            key={index}
            onDoubleClick={()=>{[dispatch({type:'togelInputUpdate', payload: !state.update, value: item.id})]}}
            >{state.update ? <>{item[i]}</> : state.value === item.id ? <InputCell item={item} name={`${i}`}/> : <>{item[i]}</>}
            </div>
        </>)
        }
        </>  
}

return {func1}




}