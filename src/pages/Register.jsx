import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/loginRegister/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {

  const [passMatch, setPassMatch] = useState(true);
  
  const {user, createUser} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";


  const handleSubmit= (e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    if (password !== confirmpassword){
      setPassMatch(false)
    }

    if(password === confirmpassword){
      createUser(email, password)
      if(user){
        navigate(from)
      }
    }
    console.log(email, password, confirmpassword)
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!!!!!!!!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="confirmpassword"
                required
              />
            </div>
            {
              !passMatch && <div> Password not match</div>
            }

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
            <GoogleLogin/>
             
            </div>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
