import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle,} from "react-icons/fa6";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast from "react-hot-toast";


const Register = () => {

      const {createUser}=useContext(AuthContext);
      const googleProvider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const [showError, setShowError] = useState('')
      const [success,setSuccess] = useState('')
      console.log(success);
      const navigate = useNavigate()


      const handleRegister = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const name = form.get("name");
            const email = form.get("email");
            const password = form.get("password")
            console.log(email,password,);
            if(password.length < 6){
                  return  setShowError('password should be at lest 6 charters');
            }
            else if(!/[A-Z]/.test(password)){
                  return setShowError('password should be at lest 1 Upper case letter');
            }
            else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
                  return  setShowError('password should be at lest 1 special charters');
            }
            createUser(email,password) 
                  .then(res =>{
                        setSuccess('Account Create Successfully!',)
                        toast.success('Register in success')
                        navigate('/')
                  })
                  .catch(error =>{
                        setShowError('Already Have Account')
                  })
      }

      const googleLogIn= () =>{
            signInWithPopup(auth,googleProvider)
                  .then(res =>{
                        console.log('log in sussccess');
                        toast.success('Log in success')
                        navigate("/")
                       
                  })
                  .catch(error =>{
                        toast.error('something Rowing')
                  })
      }
      return (
            <div>
                  <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                        
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                              <form onSubmit={handleRegister} className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                          <label className="label">
                                               <p className='text-red-700'>{showError} </p>
                                          </label>
                                          <label className="label">
                                               <p className='text-green-600'> {success}</p>
                                          </label>
                                          <label className="label">
                                               <p>already have an account? <Link className='text-indigo-600 underline' to="/login">LogIn</Link> </p>
                                          </label>
                                    </div>
                                    <div className="form-control mt-6">
                                          <button className="btn bg-[#EC4899] text-white hover:bg-[#751b48]">Register</button>
                                    </div>
                                    <div className='flex  justify-center items-center gap-6'>
                                          <button onClick={googleLogIn} className=''><FaGoogle className='text-3xl text-[#EC4899]'></FaGoogle></button>
                                          
                                    </div>
                              </form>
                        </div>
                  </div>
            </div>
            </div>
      );
};

export default Register;