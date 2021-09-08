import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div className="container">
            <div className="col-12 col-md-5 m-3">
                <h2 className="primary-color">Registro</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-register-form mb-3">
                        <label htmlFor="name" className="form-label mt-3">Nombre</label>
                        <input {...register("name")} type="text" name="name" className="form-control" id="name" />
                        <label htmlFor="email" className="form-label mt-3">Correo electrónico</label>
                        <input {...register("email")} type="email" name="email" className="form-control" id="email" />
                        <label htmlFor="password" className="form-label mt-3">Contraseña</label>
                        <input {...register("password")} type="password" name="password" className="form-control" id="password" />
                        <div className="text-center">
                            <input type="submit" value="Registrarse" className="button-green m-5" />
                            <p>¿Ya tienes cuenta? <Link to="login"><span className="primary-color">Inicia sesión</span></Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;