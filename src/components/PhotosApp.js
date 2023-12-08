import React from "react";
import '../css/PhotosApp.css'
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

function PhotosApp() {
    return (
        <div>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    )
}

export default PhotosApp;