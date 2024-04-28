import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {


    const {createUser} = useContext(AuthContext)
    // console.log(authInfo);



    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target. email.value;
        const password = e.target.password.value;
        
        console.log(email, password, name);
    
        // create user in firebase
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        } 
        )
        .catch(error =>{
            console.error(error)
        })
    
    
        if(password.length < 6){
            toast.warn("password must be 6 characters")
            return
          }
    
          if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            toast.warn("Password must be added uppercase and lowercase")
            return
          }
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <img src="" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name="name"  placeholder="name"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  placeholder="email"  className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="photo" name="photo"  placeholder="photo"  className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Already have account? please<Link to="/login">
            <button className="btn btn-link">Login</button> </Link> </p>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Register;