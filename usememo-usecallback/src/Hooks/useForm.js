import { useState } from "react";

export function useForm(initialValues) {

    const [form, setForm] = useState(initialValues)
    const onHandleChange = (e)=>{
        const { name, value } = e.target
        setForm(prev => ({...prev,[name]:value}))
    }

    return [form,onHandleChange]
}