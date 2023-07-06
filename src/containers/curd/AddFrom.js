import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUSer } from './CreateReduxer';
import { useNavigate } from 'react-router-dom';

const AddFrom = () => {

    const users=useSelector((state)=>state.user)

    const navigate=useNavigate();

    const [user, setuser] = useState('');

    const dispatch=useDispatch();

    const HandelOnChang=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        // console.log(setuser);
    }
    

    const HandelSubmit=(e)=>{
        e.preventDefault();
        // console.log("default");
        dispatch(addUSer({id:users[users.length-1].id+1,name:user.name,email:user.email}));
        navigate("/");
    }

    return (
        <div className='d-flex w-200 vh-200 justify-content-center align-item-center'>

            <div className="w-50 border bg-secondary text-white p-5">
                <form>
                    <h2>Add New User</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         placeholder="Enter Name"  onChange={(e)=>HandelOnChang(e)} value={user.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email </label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                         placeholder="Enter email" onChange={(e)=>HandelOnChang(e)} value={user.email}/>
                    </div>


                    <button type="button" className="btn btn-primary" onClick={HandelSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddFrom
