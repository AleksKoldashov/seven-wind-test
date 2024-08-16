import React from 'react'
import InputRow from './ComponInput/InputRow'
import { getList } from './API/QueryesList'
import { useQuery } from 'react-query'
import { arrTitle } from './Constants/ConstArr'
import Row from './ComponRows/Row'

export default function ComponTabel({data}:any) {

const list:any = useQuery(
  {
      queryKey: ['list'], 
      queryFn: getList
  }
)

if (list.isLoading) return <div className='loading'>Loading....</div>;
if (list.isError) return <p className='loading'>{list.error.message}</p> 
  return (
    <div>
            <div className='titel-tabel'>
            {
                arrTitle.map((item, index)=><th key={index}>{item}</th>)
            }
            </div>
            <Row data={list.data}/>
            <InputRow/>
    </div>
  )
}

