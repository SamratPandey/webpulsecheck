import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import {React, useState} from "react";

const isAuthenticated = false; // Replace with actual authentication logic

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="h-20 w-full bg-gradient-to-br from-indigo-950  to-indigo-900 ">
                <nav>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items-center">             
                                <a href="/" className="text-white text-2xl font-bold">WebPulseCheck</a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                    <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </div>
                            </div>

                            {
                                isAuthenticated ? (
                                    <div className="hidden md:block">
                                        <Button
                                            onClick={() => {navigate('/dashboard')}}
                                            className="bg-transparent"
                                        >
                                            Go To Dashboard
                                        </Button>
                                    </div>
                                ):(
                                    <div className="hidden md:block ">  
                                        <Button 
                                            onClick={() => {navigate('/signin')}}
                                            className="bg-transparent mr-3"
                                        >
                                            Signin
                                        </Button>    
                                        <Button 
                                            onClick={() => {navigate('/signup')}}
                                            className="bg-transparent ml-3"
                                        >
                                            Signup
                                        </Button> 
                                        </div>
                                )
                            }
                        </div>
                    </div>  
                </nav>
            </div>
        </>
    )
}

export default Header;