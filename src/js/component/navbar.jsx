import React from "react";

const MyNavBar = () =>{
     /**
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="navbar-nav col-2"></div>
            <div class="navbar-nav col-7">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <span></span>
            </div>
            <div class="navbar-nav">
                <a className="nav-item nav-link active text-white" href="#">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link text-white" href="#">Features</a>
                <a className="nav-item nav-link text-white" href="#">Pricing</a>
                <a className="nav-item nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
        </nav>
        </>
    )
 };
**/

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white d-flex pl-2" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
};

 export default MyNavBar