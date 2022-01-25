import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signUpUserAction } from "../redux/actions";
import { browserRouterRef } from "../App";
import MyNavbar from "../components/my-navbar";

const Register = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if ( !(data.name==="" || data.email==="" || data.password==="") && 
             (!users.find(elem => elem.email === data.email))) {
            data.money = 0;
            data.transactions = [];
            dispatch(signUpUserAction(data));
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("signedIn", true);
            browserRouterRef.current.history.replace("/wallet");
        }
        else if (data.name==="" || data.email==="" || data.password==="") {
            alert("Error: Introduce datos en todos los campos");
        }
        else {
            alert("Error: Dirección de correo electrónico ya existente");
        }
    };

    return (<>
        <MyNavbar />
        <div className="container">
            <div className="col-12 col-md-5 m-3">
                <h2 className="primary-color">Registro</h2>
                {/* <button onClick={()=>dispatch(addMoneyAction("CHUJ CIPA DUPA JEBAC"))}>CHUJ</button> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-register-form mb-3">
                        <label htmlFor="name" className="form-label mt-3">Nombre *</label>
                        <input {...register("name")} type="text" name="name" className="form-control" id="name" />
                        <label htmlFor="email" className="form-label mt-3">Correo electrónico *</label>
                        <input {...register("email")} type="email" name="email" className="form-control" id="email" />
                        <label htmlFor="password" className="form-label mt-3">Contraseña *</label>
                        <input {...register("password")} type="password" name="password" className="form-control" id="password" minLength={4} />
                        <div className="text-center">
                            <input type="submit" value="Registrarse" className="button-green m-5" />
                            <p>¿Ya tienes cuenta? <Link className="text-decoration-none primary-color" to="login">Inicia sesión</Link></p>
                        </div>
                    </div>
                </form>
                {/* {users.map(user => {
                    return (<p>{user.email}</p>);
                })} */}
            </div>
        </div>
    </>);
};

export default Register;