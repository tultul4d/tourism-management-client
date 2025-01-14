import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Login = () => {
       
    const {signInUser, signInWithGoogle, singInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    




    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target. email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
                 console.log(result.user)
                 e.target.reset();
                 navigate('/home');
        })
        .catch(error =>{
            console.error(error)
        }) 

    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }

    const handleGithubSignIn = () =>{
        singInWithGithub()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        
        <div className="hero min-h-screen bg-base-200 mt-4 mb-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <img src="" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-teal-600">Login</button>
              </div>
            </form>
            <p>New to this Site? please <Link to="/register">
            <button className="btn btn-link text-teal-200 ">Register</button> </Link> </p>
          </div>
         <div className="mt-[500px]  ">
         <p><button onClick={handleGoogleSignIn} className="btn btn-ghost  ">Google</button></p>
          <p><button onClick={handleGithubSignIn} className="">GithubLogin</button></p>
         </div>
        </div>
        
      </div>
    );
};

export default Login;


