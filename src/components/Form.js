import React, { useEffect, useState } from 'react'
const getData = {
    name:'mithu',
    age:'34'
}
function Form() {
    useEffect(() => {
        setData(prev => {
            return{
                ...prev,
                name:getData.name,
                age:getData.age
            }
        })
    },[])
    const [data,setData] =  useState({name:'',age:''});
    
    


    const handleInput = (e) =>{
        setData(prev => {
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

  return (
    <div>Form<hr></hr>

        <form onSubmit={onSubmit}>
            <input name='name' type="text" value={data.name} onChange={handleInput}/>
            <input name='age' type="text" value={data.age} onChange={handleInput} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form