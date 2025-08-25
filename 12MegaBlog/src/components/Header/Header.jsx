import React from "react";
import {Container, Logo ,LogoutBtn} from '../index.js'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux' // useSelector is used to see inside the store that wheather user is loggedIn or logged out
import { useNavigate } from "react-router-dom"; 
function Header(){
//  authSlice IS INSIDE STORE
    const authStatus = useSelector((state) => state.auth.status ) //authSlice me jaker status laker aayega & initially it will take status from initial state

    const navigate = useNavigate()

    const navItems = [
        {
            name : "Home",
            slug : '/',
            active: true
        }, 
         {
            name : "Login",
            slug : '/login',
            active: !authStatus,
        }, 
         {
            name : "Signup",
            slug : '/signup',
            active: !authStatus,
        }, 
         {
            name : "All Posts",
            slug : '/all-posts',
            active: authStatus,
        }, 
         {
            name : "Add Posts",
            slug : '/add-posts',
            active: authStatus,
        }, 
    ]

    return(

        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                        <Logo  width="70px"/>
                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                onClick={()=> navigate(item.slug)}
                                className="inline-bock px-6 py-2
                                duration-200 hover:bg-blue-100 rounded-full"
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}
                        {authStatus && ( // New syntax It means if authstatus is true than only the execution of what's inside () happens
                                <li>
                                    <LogoutBtn/>
                                </li>
                        )}
                    </ul>

                </nav>
            </Container>


        </header>
    )
}

export default Header