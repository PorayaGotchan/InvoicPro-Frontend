import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateInvoicpro() {
    const [name_lastname, setname_lastname] = useState("");
    const [due_date, setdue_date] = useState("");
    const [total, settotal] = useState("");
    const [status, setstatus] = useState("");
    const [number, setnumber] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await  axios
                .post("http://localhost:5000/create-Invoicpro", {  name_lastname, due_date, total,status, number });
                navigate('/'); //redirect to home page


        } catch (error) {
            setMessage("Error creating user, please try again");
        }
    }

    return (
        <div className='container'>
            <h1>Create Invoicpro</h1>
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

                <div className="w-25 p-3">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default CreateInvoicpro;
