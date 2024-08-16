import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import { MyAppContext } from '../Reducer/Reducer';
import { mutateUpdate } from '../API/QueryesList';
import MyMessage from '../Utilitis/MyMessage';


export default function InputCell({item, name}:any) {
const queryClient=useQueryClient()   
const {state, dispatch}=React.useContext<any>(MyAppContext)  
const mess = MyMessage()
const [data, setData]=useState(item)  
const [value, setValue]=useState(item[name])   

const fun=()=>{
    switch (name) {
        case 'rowName':
            setData({...data, rowName: value})
            break;
        case 'salary':
                setData({...data, salary: value})
            break;
        case 'equipmentCosts':
            setData({...data, equipmentCosts: value})
            break;
            case 'overheads':
            setData({...data, overheads: value})
            break;
        case 'estimatedProfit':
            setData({...data, estimatedProfit: value})
            break;    
        default:
            break;
    }
}

const handelChange=(e:any)=>{
    setValue(e.target.value)
}
const update=useMutation({
    mutationFn: ():any=>{ 
        mutateUpdate(item, data)
    },
    onSuccess:()=>{    
        setTimeout(()=>{
            dispatch({type:'togelInputUpdate', payload: true})
            queryClient.invalidateQueries(['list'])
        },500)
    },
    onError:()=>{
        console.log('error');
        
    }
})

const onPress=(e:any)=>{
    if(e.key==='Enter'){
        update.mutate()
    }
}

useEffect(()=>{
    fun()
},[value])

  return (
    <Input
    value={value}
    onChange={handelChange}
    onKeyDown={onPress}
    />
  )
}
