import React, {useState} from "react";

const initialFormState ={
    username: "",
    email: "",
    password: ""
}
export default function Register(){

    const [form, setForm]=useState(initialFormState);
    const [user,setUser]=useState(null);

    const handleChange =(e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit =e=> {
        e.preventDefault();
        setUser(form);
        setForm(initialFormState);

    }
    return <div style={{ textAlign: 'center' }}>
        <h2>Register</h2>
        <form style={{
            display: 'grid',

            alignItems: 'center',
            justifyContent: 'center'
        }} onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={form.username}
            />
            <input type="email"
            placeholder="Email Address"
            name="email"
                value={form.email}
                onChange={handleChange}/>

            <input type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
{user && JSON.stringify(user, null, 2)}
    </div>
};