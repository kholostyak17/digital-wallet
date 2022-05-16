import React from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signUpUserAction } from "../redux/actions";
import { browserRouterRef } from "../router";
import { t } from "i18next";

const Register = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (!(data.name === "" || data.email === "" || data.password === "") &&
            (!users.find(elem => elem.email === data.email))) {
            data.money = 0;
            data.transactions = [];
            dispatch(signUpUserAction(data));
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("signedIn", true);
            browserRouterRef.current.history.replace("/wallet");
        }
        else if (data.name === "" || data.email === "" || data.password === "") {
            alert(t("alerts.error_empty_fields"));
        }
        else {
            alert(t("alerts.error_already_registered"));
        }
    };

    return (
        <div className="container">
            <div className="col-12 col-md-5 m-3">
                <h2 className="primary-color fw-bold">{t("common.sign_up")}</h2>
                {/* <button onClick={()=>dispatch(AddFundsAction("CHUJ CIPA DUPA JEBAC"))}>CHUJ</button> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="div-register-form mb-3">
                        <label htmlFor="name" className="form-label mt-3">{t("common.full_name")} *</label>
                        <input {...register("name")} type="text" name="name" className="form-control" id="name" autocomplete="new-password"/>
                        <label htmlFor="email" className="form-label mt-3">{t("common.email")} *</label>
                        <input {...register("email")} type="email" name="email" className="form-control" id="email" autocomplete="new-password"/>
                        <label htmlFor="password" className="form-label mt-3">{t("common.password")} *</label>
                        <input {...register("password")} type="password" name="password" className="form-control" id="password" minLength={4} autocomplete="new-password"/>
                        <div className="text-center">
                            <input type="submit" value={t("common.continue")} className="button-green m-5" />
                            <p className="my-2 text-switch-sign-up-sign-in">
                                {t("register.already_got_account")}{" "}
                                <Link className="text-decoration-none primary-color" to="login">
                                    {t("common.sign_in")}
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;