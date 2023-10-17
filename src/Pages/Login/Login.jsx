import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
      const {logIn} = useContext(AuthContext)
      const [showError, setShowError] = useState('')
      const [success,setSuccess] = useState('')
      const location = useLocation()
      const navigate = useNavigate()

      const handleLogIn = e =>{
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const email = form.get("email");
            const password = form.get("password")
            console.log(email,password);
            
            logIn(email,password) 
                  .then(res =>{
                        toast.success('Log in Successfully!',)
                        setSuccess('Log in Successfully!',)
                        navigate(location?.state ? location.state : '/')
                  })
                  .catch(error =>{
                        setShowError('Invalid email or Password')
                        toast.error('Invalid email or Password')
                  })

      }
      return (
            <div>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">

                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4">
                                    <h1 className="text-3xl font-bold">Log In now!</h1>
                                    <form onSubmit={handleLogIn} className="card-body">
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
                                                      <p>Do Not Have An Account? <Link className='text-indigo-600 underline' to="/register">Register</Link> </p>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn bg-[#EC4899] text-white">Log In</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;