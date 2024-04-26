import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signInUser, googleLogin, githubLogin } = useAuth();
    const [credentials, setCredentials] = useState("");

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    // Function to handle social login
    const handleSocialLogin = socialLoginProvider => {
        socialLoginProvider()
            .then(result => {
                if (result.user) {
                    toast.success('Login Successful!', {
                        autoClose: 2000
                    });
                    navigate(from);
                }
            })
    }


    // Function to handle form submission
    const onLogin = data => {
        const { email, password } = data;

        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login Successful!', {
                        autoClose: 2000
                    });
                    navigate(from);
                }
            })
            .catch(() => {
                setCredentials('Invalid Credentials! Please try again.');
            })
    }


    return (
        <div className="hero min-h-screen bg-base-100 mt-28 mb-14">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Great to have you back!</h1>

                    <div className="flex items-center gap-10 justify-center border mt-5 font-bold text-lg p-2 text-white hover:bg-primary hover:text-black"
                        onClick={() => handleSocialLogin(googleLogin)}>
                        <FcGoogle />
                        <p>Continue With Google</p>
                    </div>
                    <div className="flex items-center justify-center gap-10 border mt-5 font-bold text-lg p-2 text-white hover:bg-primary hover:text-black"
                        onClick={() => handleSocialLogin(githubLogin)}>
                        <FaGithub />
                        <p>Continue With Github</p>
                    </div>
                </div>

                <div className="divider">or</div>

                <div className="card shrink-0 w-full max-w-sm shadow-md shadow-gray-400 bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-secondary">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-secondary">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => handleSocialLogin} className="btn btn-primary font-bold" >Login</button>
                        </div>
                        {
                            credentials && <small className="text-secondary">{credentials}</small>
                        }
                        <div className="card-text">
                            <p>New here? <Link to="/registration"><button className="btn btn-link">Create an Account</button></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
