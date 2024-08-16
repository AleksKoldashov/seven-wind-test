import React from 'react'
import { MyAppContext } from '../Reducer/Reducer'
import { Input } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import { mutateAddStr1 } from '../API/QueryesList';



export default function InputRow({parentId}:any) {
const queryClient=useQueryClient()   
const {state, dispatch}=React.useContext<any>(MyAppContext)  
const addStr1=useMutation({
    mutationFn: ():any=>{
        if(parentId){
        mutateAddStr1(state.valueStr1, parentId)
        }else{
        mutateAddStr1(state.valueStr1, null)
        }
    },
    onSuccess:()=>{
        dispatch({type:'clearStr1'})
        setTimeout(()=>{
            queryClient.invalidateQueries(['list'])
        },500)
    }
})

const onPress =(e:any)=>{
    if(e.key==='Enter'){
        addStr1.mutate()
    }
}
  return (<div className='input-row'>
        <div></div>
        <Input
        value={state.valueStr1.rowName}
        onChange={(e)=>{dispatch({type: 'valueStr1rowName', payload: e.target.value})}}
        onKeyDown={onPress}
        />
        <Input
        value={state.valueStr1.salary}
        onChange={(e)=>{dispatch({type: 'valueStr1salary', payload: e.target.value})}}
        />
        <Input
        value={state.valueStr1.equipmentCosts}
        onChange={(e)=>{dispatch({type: 'valueStr1equipmentCosts', payload: e.target.value})}}
        />
        <Input
        value={state.valueStr1.overheads}
        onChange={(e)=>{dispatch({type: 'valueStr1overheads', payload: e.target.value})}}
        />
        <Input
        value={state.valueStr1.estimatedProfit}
        onChange={(e)=>{dispatch({type: 'valueStr1estimatedProfit', payload: e.target.value})}}
        />
  </div>)
}
