import React, { useState } from 'react'
import Tabs from './Tabs'

function Main() {

    const [formData,setFormData] = useState({
        email:'',
        password:'',
        name:'',
        age:'',
        address:[
          {
            addressLine:''
          }
        ]
    });

    const handleInput = (e) => {
        setFormData((prevData) => {
            return{
                ...prevData,
                [e.target.name]:e.target.value
            }
        })
    };

    const handleDynamicInput = (e,index) => {
      
    const data = [...formData.address];
      data[index][e.target.name] = e.target.value;
    setFormData((prev) => {
      return{
        ...prev,
        address:data
      }
    })

    console.log(formData)
    }

    const addMore = () => {
      let field = {addressLine:''}
      const data =  [...formData.address,field]
      
      setFormData((prev) => ({...prev,address:data}) );
    }

    const removeField = (index) => {
      const data = [...formData.address];
      data.splice(index,1);
      setFormData((prev) => ({...prev,address:data}))
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>

        <form onSubmit={onSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name='email' value={formData.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name='password' value={formData.password} onChange={handleInput} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  {
    formData.address.map((address,index) => (
      <div key={index}>
        <div className="form-group">
    <label for="exampleInputPassword1">Address</label> <button onClick={() => removeField(index)}>remove</button>
    <input type="text" name='addressLine' value={address.addressLine} onChange={(e) => handleDynamicInput(e,index)} className="form-control" id="exampleInputPassword1" placeholder="address"/>
   
  </div>
      </div>
    ))
  }
   <button onClick={addMore}>Add more address</button>
  
<Tabs data={formData} setFormData={setFormData} handleInput={handleInput}/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 

    </div>
  )
}

export default Main