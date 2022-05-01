import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { browserRouterRef } from "../Router";

const Login = () => {
    const users = useSelector(state => state.users);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const userAccount = users.find(element => element.email === data.email);
        if (userAccount && data.password === userAccount.password) {
            localStorage.setItem("name", userAccount.name);
            localStorage.setItem("email", userAccount.email);
            localStorage.setItem("signedIn", true);
            browserRouterRef.current.history.replace("/wallet");

        }
        else {
            alert("Usuario no encontrado / Credenciales incorrectas")
        }
    };

    return (
        <div className="div-login">
            <h3 className="primary-color">Iniciar sesión</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-login-form mb-3">
                    <label htmlFor="email" className="form-label mt-3">Correo electrónico</label>
                    <input {...register("email")} type="email" name="email" className="form-control" id="email" />
                    <label htmlFor="password" className="form-label mt-3">Contraseña</label>
                    <input {...register("password")} type="password" name="password" className="form-control" id="password" />
                </div>
                <input type="submit" value="Acceder" className="button-green mb-4" />
            </form>
            <p>¿No tienes cuenta? <Link className="text-decoration-none primary-color" to="register">Regístrate</Link></p>
        </div>
    );
};

export default Login;