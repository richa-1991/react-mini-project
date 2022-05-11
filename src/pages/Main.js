import { userData } from '../Data/Users.js'
import { Link, useParams, Navigate,NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
    return (
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-6">
                        <NavLink className="navbar-brand" to="/userlist">USERS LIST </NavLink> | {" "}
                    </div>
                    <div className="col-md-6">
                     <Link className="navbar-brand" to="/adduser">ADD USERS </Link>{" "}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function UserList() {
    return (
        <>
        <h2>This is Our User List</h2>
            <table class="table table-bordered 1px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>ContactNo</th>
                        <th>Age</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th colSpan={3}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(userData).map((user) => {
                        return (
                            <tr>
                                <td>{user.Id}</td>
                                <td>{user.Name}</td>
                                <td>{user.ContactNo}</td>
                                <td>{user.Age}</td>
                                <td>{user.UserName}</td>
                                <td>{user.Password}</td>
                                <td>
                                    <Link to={"/userdetails/" + user.Id}>
                                        View
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/deleteuser/" + user.Id}>
                                        Delete
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/updateuser/" + user.Id}>
                                        Update
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export function UserDetails() {
    let { id } = useParams();
    return Array.from(userData).map((ele) => {
        //console.log(ele.Id);
        if (ele.Id === parseInt(id)) {
            return (
                <>
                    <table class="table table-bordered">
                     
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>CONTACTNO</th>
                                <th>AGE</th>
                                <th>USERNAME</th>
                                <th>PASSWORD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={ele.Id}>
                                <td>{ele.Id}</td>
                                <td>{ele.Name}</td>
                                <td>{ele.ContactNo}</td>
                                <td>{ele.Age}</td>
                                <td>{ele.UserName}</td>
                                <td>{ele.Password}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            );
        }
    });
}

export function AddUser() {
    var newuser = {
        Id: "",
        Name: "",
        ContactNo: "",
        Age: "",
        UserName: "",
        Password: "",
    };

    let [AllUser, SetUser] = useState(newuser);

    function Add(ev) {
        SetUser((currentobj) => {
            return { ...currentobj, [ev.target.name]: ev.target.value };
        });
    }

    function AddUser(ev) {
        ev.preventDefault();
        userData.add(AllUser);
    }
    return (
    
          <div class="container mt-3">
            <h2>Add User</h2>
            <div class="row">
            <form>
            <div class="mb-3 mt-3">
                <label>ID:</label>
                <input
                    type="text"
                    value={AllUser.Id}
                    name="Id"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <label>Name:</label>
                <input
                    type="text"
                    value={AllUser.Name}
                    name="Name"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <label>ContactNo:</label>
                <input
                    type="text"
                    value={AllUser.ContactNo}
                    name="ContactNo"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <label>Age:</label>
                <input
                    type="text"
                    value={AllUser.Age}
                    name="Age"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <label>UserName:</label>
                <input
                    type="text"
                    value={AllUser.UserName}
                    name="UserName"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <label>Password:</label>
                <input
                    type="text"
                    value={AllUser.Password}
                    name="Password"
                    onChange={Add}
                ></input>
                </div>
                <div class="mb-3 mt-3">
                <input className="btn-primary" onClick={AddUser} type="submit"></input>
                </div>
            </form>
         </div>
        </div>
    );
}

export function DeleteUser() {
    let { id } = useParams();
    let user = Array.from(userData).find((ele) => ele.Id === parseInt(id));
    let Isdelete = userData.delete(user);
    if (Isdelete === true) {
        <Navigate to="/userlist"></Navigate>;
        return <UserList></UserList>;
    }
}

export function UpdateUser() {
    let { id } = useParams();
    let user = Array.from(userData).find((ele) => ele.Id === parseInt(id));

    let [AllUser, SetUser] = useState(user);

    function Update(ev) {
        SetUser((currenObj) => {
            return { ...currenObj, [ev.target.name]: ev.target.value };
        });
    }
    function UpdateChanges(ev) {
        ev.preventDefault();
       
        userData.delete(user);
        userData.add(AllUser);
    }
    return (
      
            
            <div class="container mt-3">
                <h2>Update User</h2>
            <div class="row">
            <form >
            <div class="mb-3 mt-3">
                    <label>Name:</label>
                    <input
                        type="text"
                        class="form-control"
                        value={AllUser.Name}
                        name="Name"
                        onChange={Update}
                        placeholder="Enter Your Name"
                    ></input>
                    </div>
                    <div class="mb-3 mt-3">
                    <label>ContactNo:</label>
                    <input
                        type="text"
                        class="form-control"
                        value={AllUser.ContactNo}
                        name="ContactNo"
                        onChange={Update}
                        placeholder="Enter your Contact no."
                    ></input>
                    </div>
                    <div class="mb-3 mt-3">
                    <label>Age:</label>
                    <input
                        class="form-control"
                        type="text"
                        value={AllUser.Age}
                        name="Age"
                        onChange={Update}
                        placeholder="Enter your age"
                    ></input>
                    </div>
                    <div class="mb-3 mt-3">
                    <label>UserName:</label>
                    <input
                        type="text"
                        class="form-control"
                        value={AllUser.UserName}
                        name="UserName"
                        onChange={Update}
                        placeholder="Enter your UserName"
                    ></input>
                    </div>
                    <div class="mb-3 mt-3">
                    <label>Password:</label>
                    <input
                        type="text"
                        class="form-control"
                        value={AllUser.Password}
                        name="Password"
                        onChange={Update}
                        placeholder="Enter password"
                    ></input>
                    </div>
                    <div class="mb-3 mt-3">
                    <input className="btn-primary" onClick={UpdateChanges} type="submit"></input>
                   </div>
            </form>
            </div>
            </div>
      
    );
}
