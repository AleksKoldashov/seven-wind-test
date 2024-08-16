export const getList = async ()=>{
    const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/126425/row/list`)
    if (!response.ok) {
        throw new Error('Что-то пошло не так');
      }
    return await response.json()
}

export const deletedRow=async (id:any)=>{
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/126425/row/${id}/delete`,{
      method: 'DELETE',
      headers:{
          "Content-Type":"application/json"
      }
  })
  if (!response.ok) {
    throw new Error('Что-то пошло не так');
  }
  return response.json()
}


export const mutateUpdate=async (item:any, update:any)=>{
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/126425/row/${item.id}/update`,{
      method: 'POST',
      body:JSON.stringify(update),
      headers:{
          "Content-Type":"application/json"
      }
  })
  if (!response.ok) {
    throw new Error('Что-то пошло не так');
  }
  return response.json()
}

export const mutateAddStr1=async (value:any, parentId:any)=>{
  const response = await fetch(`http://185.244.172.108:8081/v1/outlay-rows/entity/126425/row/create`,{
      method: 'POST',
      body:JSON.stringify({...value, parentId}),
      headers:{
          "Content-Type":"application/json"
      }
  })
  return response.json()
}