import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        

        // user sign in
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            e.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.error(error)
            
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div className="w-1/2 mx-auto bg-slate-200 rounded-xl ">
            <div className="card-body ">
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name="email" placeholder="email"
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password"
                            placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New here? <Link to='/register' className="text-blue-600 font-normal underline"
                 >Please Register.</Link></p>  
                    
                    <div className="flex ">
                    <button onClick={handleGoogleSignIn}  className="btn  btn-sm mr-2">Google</button>
                    <button className="btn  btn-sm mr-2">Facebook</button>
                    <button className="btn  btn-sm">github</button>
                    </div>
            </div>
            
        </div>
    );
};

export default Login;