import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './CreateReduxer';

const Home = () => {

    const user=useSelector((state)=>state.user);
    console.log("data",user);


    const dispatch=useDispatch();
    // const navigate=useNavigate();

    const HandlDelete=(id)=>{
        console.log("d",id);
        dispatch(deleteUser({id:id}));
        // navigate("")

    }

  return (
    <div className='container'>
        <h1>Curd In Redux</h1>
        <Link to="/create" className='btn btn-success my-3'>Create + </Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((elem,index)=>(
                        <tr key={index}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>
                                {/* <button className='btn btn-sm button0-sccuess ms-2'>Edit</button> */}
                                {/* <button className='btn btn-sm button0-danger ms-2'>Delete</button> */}
                                <button type="button" class="btn btn-sm  btn-sucess"><Link to={`/edit/${elem.id}`}>Edit</Link></button>
                                <button type="button" class="btn btn-sm btn-danger ms-2" onClick={()=>HandlDelete(elem.id)}>Delete</button>

                            </td>
                        </tr>
                    ))
                }

            </tbody>

        </table>
    </div> 
  )
}

export default Home
