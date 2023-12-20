import React, { useEffect, useState } from "react";
import "./Password.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../buttons/ThemeButton";
import axios from "axios";

const Password = () => {

    const url = "http://localhost:9000/api/users";
    let navigate = useNavigate();

    document.title = `Change password | ${environment.app.name}`;
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [userUpdate, setUpdate] = useState({
        passOld: "",
        passNew: "",
        passCon:""

    });
    const reload = () => window.location.reload();



    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log("testing for current user:", currentUser); 
        setUser(currentUser);
      }, []);

    const handleChange = (e) => {
        setUpdate({ ...userUpdate, [e.target.id]: e.target.value });
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (userUpdate.passOld !== user.user.password) {
            setError("Incorrect old password!");
            return;
        }
        if(userUpdate.passCon !== userUpdate.passNew){
            setError("Confirm password mismatch!");
            return;
        }
        try {
            await axios.put(`${url}/${user.user.id}`,{password:userUpdate.passNew});
        } catch (error) {
            console.log(error);
        }
        logout();
        reload();
    };

    function logout() {
        localStorage.removeItem("currentUser");
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
    }

    return (
        <>

            <section>
                <div className="admin-login">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-4 col-sm-3 col-12"></div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="login">
                                    <div className="d-flex justify-content-between">
                                        <h1>CHANGE PASSWORD</h1>
                                    </div>

                                    <form onSubmit={handleUpdate}>
                                        {error !== "" ? <div className='error-75'><small>{error}</small></div> : <></>}

                                        <input onChange={handleChange} type="password" id="passOld" name="passOld" placeholder="Old Password" />
                                        <input onChange={handleChange} type="password" id="passNew" name="passNew" placeholder="New Password" />
                                        <input onChange={handleChange} type="password" id="passCon" name="passNew2" placeholder="Confirm New Password" />
                                        <p>{`${userUpdate.passNew} ${userUpdate.passOld} ${userUpdate.passCon}`}</p>
                                        <ThemeButton type="submit" >CHANGE PASSWORD</ThemeButton>
                                        <br />

                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3 col-12"></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Password;