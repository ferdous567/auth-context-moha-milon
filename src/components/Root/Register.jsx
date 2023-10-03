import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
   

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        // cerate user
         createUser (email, password)
         .then(result => console.log(result.user))
         .catch(err => console.error(err))
    }
    return (
        <div className="w-1/2 mx-auto bg-slate-200 rounded-xl ">
            <div className="card-body ">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="Name"
                            name="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email"
                            name="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password" placeholder="Password"
                            className="input input-bordered" />
                        <div>
                            <input type="checkbox" name="" id="checked" />
                            <p>Accepts our all terms and conditions.</p>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register Now</button>
                    </div>
                </form>
                <p>Have any account?
                    <Link to="/login" className=" link link-hover"> Please Login.</Link></p>

            </div>

        </div>
    );
};

export default Register;