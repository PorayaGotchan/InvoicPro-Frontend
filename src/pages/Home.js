import React from 'react';
import { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { Link } from 'react-router-dom';    //import Link

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchInvoicpro();
    }, []);

    const fetchInvoicpro = async () => {
        try {
            const res = await axios.get('http://localhost:5000/');
            console.log("Fetched Data:", res.data);  // ตรวจสอบข้อมูลที่ได้จาก API
            setData(res.data);
            console.log("Success");
        } catch (error) {
            console.log("Fail", error);
        }
    };


    const deleteUser = async (id) => {
        if (window.confirm("Are you sure ?")) {
            try {
               await axios.delete(`http://localhost:5000/delete-user/${id}`);
               fetchInvoicpro()
                

            } catch (error) {
                console.log("Error deleting Invoicpro: " + error)
            }
        }
    }

    return (
        <>

            <div className='container text-center'>

                <h1>Invoicpro</h1>

                <Link to="/create-Invoicpro" className='btn btn-primary btn-sm mb-3'>Create New</Link> 

                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                            <th scope="col">number</th>
                            <th scope="col">name_lastname</th>
                            <th scope="col">due_date</th>
                            <th scope="col">total</th>
                            <th scope="col">status</th>
                            <th scope="col">Action</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.number}</td>
                                <td>{item.name_lastname}</td>
                                <td>{item.due_date}</td>
                                <td>{item.total}</td>
                                <td>{item.status}</td>
                                <td>
                              <button className="btn btn-warning">  <Link to ={`edit-Invoicpro/${item.id}`} className='MyFontBlack'>Edit</Link></button>
                                    {" "}
                                    <button className="btn btn-danger"> <Link to="#" className='MyFont' onClick={() => deleteUser(item.id)}>Delete</Link> </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>

    )
}
export default Home;