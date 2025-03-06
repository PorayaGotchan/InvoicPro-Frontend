import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateInvoicpro = () => {
        const [name_lastname, setname_lastname] = useState("");
        const [due_date, setdue_date] = useState("");
        const [total, settotal] = useState("");
        const [status, setstatus] = useState("");
        const [number, setnumber] = useState("");
        const [message, setMessage] = useState("");
        const { id } = useParams();
        const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/Invoicpro/${id}`);
                setname_lastname(res.data.name_lastname);
                setdue_date(res.data.due_date);
                settotal(res.data.total);
                setstatus(res.data.status);
                setnumber(res.data.number);


            } catch (error) {
                setMessage("Error Fetching User")

            }
            //ถ้า ไม่มี Dependency => useEffect() จะทำงานทุกครั้งที่ Component ทำการ render
            //ถ้า [] ว่างเปล่า => useEffect() จะทำฃานแค่ตอน mount (โหลดครั้งแรกเท่านั้น)
            //ถ้ามีค่าใน Dependency => useEffect() จะทำงานเมื่อค่าที่กำหนดเปลี่ยนแปลง
        }
        if (id) {
            fetchUser();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           await axios
                .put(`http://localhost:5000/update-Invoicpro/${id}`, { name_lastname, due_date, total, status, number });
            navigate("/")

        } catch (error) {
            setMessage("Error Updating User. Please Try Again")

        }
    }

    return (
        <div className='container'>
        <h1>Update Invoicpro </h1>
        {message && <p className='text-danger'>{message}</p>}

        <form onSubmit = {handleSubmit}>

        <div className="w-25 p-3">
                <label className='form-label'>number: {number}</label>
                <input type="text" 
                className="form-control" 
                value = {number}
                onChange = {(e) => setnumber(e.target.value)} 
                required />
            </div>

            <div className="w-25 p-3">
                <label className='form-label'>name_lastname: {name_lastname}</label>
                <input type="text"
                className="form-control" 
                value = {name_lastname}
                onChange = {(e) => setname_lastname(e.target.value)} 
                required />
            </div>

            <div className="w-25 p-3">
                <label className='form-label'>due_date: {due_date}</label>
                <input type="date" 
                className="form-control" 
                value = {due_date}
                onChange = {(e) => setdue_date(e.target.value)} 
                required />
            </div>

            <div className="w-25 p-3">
                <label className='form-label'>total: {total}</label>
                <input type="text" 
                className="form-control" 
                value = {total}
                onChange = {(e) => settotal(e.target.value)} 
                required />
            </div>

            <div className="w-25 p-3">
                <label className='form-label'>status: {status}</label>
                <select
                className="form-control" 
                value = {status}
                onChange = {(e) => setstatus(e.target.value)} 
                required 
                >
                
                <option value="">Pls select status</option>
                <option value="ชำระแล้ว">ชำระแล้ว</option>
                <option value="รอการชำระ">รอการชำระ</option>
                </select>
            </div>


                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}
export default UpdateInvoicpro;