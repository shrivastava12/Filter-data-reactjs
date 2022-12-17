import React, { useEffect } from 'react'

function Tabs({data,handleInput,setFormData}) {

 useEffect(() => {
    setFormData(prev => {
        return{
            ...prev,
            name:'mithu',
            age:33
        }
    })
 },[])
 
  return (
    <div>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input name='name' value={data.name} onChange={handleInput} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
   
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">age</label>
    <input type="text" name='age' value={data.age} onChange={handleInput} className="form-control" id="exampleInputPassword1" placeholder="age"/>
  </div>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Hell0</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
    </div>
  )
}

export default Tabs