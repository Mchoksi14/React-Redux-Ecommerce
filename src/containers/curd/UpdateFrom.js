import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './CreateReduxer';

const UpdateFrom = () => {

    const { id } = useParams();
    // console.log(id);
    // show all user state from useselected
    const users = useSelector((state) => state.user);
    const existinguser = users.filter(f => f.id == id);//filter the user with matching

    const { name, email } = existinguser[0];//array pass
    // const [user, setuser] = useState('');
    const [upname, setupname] = useState(name);
    const [upemail, setupemail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const HandelUpdate = (e) => {
        e.preventDefault();
        // console.log("up");
        dispatch(updateUser({
            id: id,
            name: upname,
            email: upemail
        }))
        navigate("/");

    }


    return (
        <div className='d-flex w-200 vh-200 justify-content-center align-item-center'>

            <div className="w-50 border bg-secondary text-white p-5">
                <form>
                    <h2>Update New User</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter Name" value={upname} onChange={(e) => setupname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email </label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" value={upemail} onChange={(e) => setupemail(e.target.value)} />
                    </div>


                    <button type="button" className="btn btn-primary" onClick={HandelUpdate}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateFrom
