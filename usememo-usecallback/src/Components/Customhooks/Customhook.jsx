// import React, { useState } from 'react'

// const Customhook = () => {

//     const [value, setvalue] = useState({ username: "", password: "" })
//     console.log("VALUE===" , value)

//     return (
//         <div>
//             <h1>Normal Case</h1>

//             <input type="text" placeholder='Enter Username' name='username'
//                 value={value.username}
//                 onChange={(e)=>setvalue({...value,[e.target.name]:e.target.value})}
//             />

//             <input type="password" placeholder='Enter password' name='password'
//                 value={value.password}
//                 onChange={(e)=>setvalue({...value,[e.target.name]:e.target.value})}
//             />

            
//         </div>
//     )
// }
// export default Customhook















import { useForm } from "../../Hooks/useForm"
const Customhook = () => {

    const [form, onHandleChange] = useForm(
        { Email: "", Username: "", Password: "", phone: "" })

    console.log('My form values==', form)

    return (
        <div>
            <h1>Custom Hook Case</h1>

            <input type="text" placeholder="Enter your phnone:"
                name="phone" value={form.phone}
                onChange={onHandleChange}
            />
            <input type="text" placeholder="Enter email"
                name="Email" value={form.Email}
                onChange={onHandleChange} />
            
            <input type="text" placeholder='Enter Username'
                name="Username" value={form.Username}
                onChange={onHandleChange} />
            
            <input type="text" placeholder='Enter Password'
                name="Password" value={form.Password}
                onChange={onHandleChange} />
        </div>
    )
}

export default Customhook