import React, { useState } from 'react'

function ProfileForm(submit) {
    const [profile, setProfile] = useState({
      firstname:"",
      lastname:"",
      email:"",
      phone:""
    });


    const handler =(event) =>{
     setProfile((prev)=>({
     ...prev,
     [event.target.name] : event.target.value
     })); 
    } 

    const handleForm =(e)=>{
        e.preventDefualt();
        submit(profile)
    }
  return (
    <div className='formContianer'>
    <h3>Profile Form</h3>
    <form>
    <fieldset>
    <legend>Bio Data</legend>
    <div className="names">

    <label>
    First name
    <input name='firstname'  value={profile.firstname} onChange={handler}type="text" />
    </label>

    <label>
    Last name
    <input name='lastname' value={profile.lastname} onChange={handler} type="text" />
    </label>
    </div>

     <div className="names">
    <label>
    Email
    <input name='email' value={profile.email} onChange={handler} type="text" />
    </label>

    <label>
    Phone
    <input name='phone' value={profile.tel} onChange={handler} type="text" />
    </label>

    </div>

    </fieldset>
    <button className='form' onclick={handleForm}>Add Profile</button>

    </form>

    </div>
  )
}

export default ProfileForm
