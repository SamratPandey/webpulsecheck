import { useState } from "react";
import { Link } from "react-router-dom";
import  {toast} from "react-hot-toast";

import { Button } from "@/components/ui/button";

const apiUrl = import.meta.env.VITE_API_URL;

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSignup = () => {
        // Handle signup logic here
        const { username, email, password, confirmPassword } = formData;
        
        if(!username || !email || !password || !confirmPassword){
            toast.error("All fields are required");
            return;
        }

    }


    return (
         <>
            <div className="h-screen w-full bg-gradient-to-br from-indigo-950 to-indigo-800 flex justify-center items-center  text-white overflow-x-hidden">
                <div className="h-[400px] w-[350px] bg-gradient-to-br from-indigo-700 to-indigo-800 flex flex-col gap-15 justify-center items-center rounded-2xl shawdow-2xl shadow-black/30">
                    <div>
                            WebPluse+
                    </div>
                    <div className="flex flex-col gap-3">
                        <input type="text" placeholder="Enter Username" 
                            className="bg-gray-400 text-gray-600 ml-4 rounded-md p-1 border-[1px] placeholder:text-gray-600  border-gray-600"
                            onChange={handleChange} name="username" value={formData.username}
                        />
                        <input type="email" placeholder="Enter Email" 
                            className="text-white  ml-4 rounded-md p-1"
                            onChange={handleChange} name="email" value={formData.email}
                        />
                        <input type="password" placeholder="Enter Password" 
                            className="text-white ml-4 rounded-md p-1"
                            onChange={handleChange} name="password" value={formData.password}
                        />
                        <input type="password" placeholder="Confirm Password" 
                            className="text-white ml-4 rounded-md p-1"
                            onChange={handleChange} name="confirmPassword" value={formData.confirmPassword}
                        />
                        <p 
                            className="text-sm "
                        >
                            Alread Have account? 
                            
                            <Link 
                                className="text-blue-400 ml-2"
                                to='/signin'
                            >
                                Signin
                            </Link>
                        </p>
                    </div>
                    <Button
                        clssName = ""
                        onClick= {() => handleSignup()}
                    >
                        Signup
                    </Button>
                </div>
            </div>
         </>
            
    );
}

export default Signup;