import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/> {/*   outlet mai hum change ker sakte hai while maintaining header & footer same */}
        <Footer/>
        
        
        </>
    )
}

export  default Layout