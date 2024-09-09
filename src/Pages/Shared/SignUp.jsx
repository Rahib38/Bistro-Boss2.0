import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocailLogin from "./SocailLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log('user profile info updated')

          const userInfo = {
            name: data.name,
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
            .then(res => {
              if (res.data.insertedId) {
              
                reset()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Log in SuccessFully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/')
              }
            })

        })
      .catch(error =>console.log(error))
    });
  };
  return (
    <div>
      <Helmet>
        <title>Food Dokan | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">phot URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />

                {errors.password?.type === "required" && (
                  <span className="text-red-400">This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    This is must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400">
                    This is must less 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                    password must be one uppercase ,one number, one lowercase,
                    one special character.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="sign up"
                />
              </div>
            </form>
            <p className='px-4'>Already have a account <Link to='/login'>login</Link></p>
            <SocailLogin></SocailLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
