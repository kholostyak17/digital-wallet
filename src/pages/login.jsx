import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { browserRouterRef } from "../router";
import { t } from "i18next";

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
            alert(t("alerts.error_wrong_credentials"))
        }
    };

    return (
        <div className="div-login">
            <h2 className="primary-color fw-bold">{t("common.sign_in")}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-login-form pt-2">
                    <div className="my-4">
                        <label htmlFor="email" className="form-label">{t("common.email")}</label>
                        <input {...register("email")} type="email" name="email" className="form-control" id="email" />
                    </div>
                    <div className="my-4">
                        <label htmlFor="password" className="form-label">{t("common.password")}</label>
                        <input {...register("password")} type="password" name="password" className="form-control" id="password" />
                    </div>
                </div>
                <input type="submit" value={t("common.continue")} className="button-green mb-4" />
            </form>
            <p className="my-3 text-switch-sign-up-sign-in">
                {t("login.no_account")}{" "}
                <Link className="text-decoration-none primary-color" to="register">
                    {t("common.sign_up")}
                </Link>
            </p>
        </div>
    );
};

export default Login;