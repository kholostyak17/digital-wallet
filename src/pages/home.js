import React from "react";

const Home = () => {

    return (
        <div className="container my-3 text-center">
            <h1 className="primary-color">DIGITAL WALLET</h1>
            <div className="text-center">
                AAAA
            </div>
            <div>
             <button className="button-green m-3">Regístrate</button>
             <button className="button-green m-3">Accede</button>
            </div>
            <input type="time" name="" id=""  onChange={(e)=>console.log(e.target.value)}/>
            <input type="date" name="" id=""  onChange={(e)=>console.log(e.target.value)}/>
        </div>
    );
};

export default Home;