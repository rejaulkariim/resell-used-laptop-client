import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold text-primary">Login</h2>
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
            />
            {/* {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )} */}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered input-primary w-full max-w-xs"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 character",
                },
              })}
            />
            {/* {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )} */}
            <label className="label">
              <Link>
                <span className="label-text">Forget Password</span>
              </Link>
            </label>
            {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
          </div>
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="Login"
          />
          {/* <div>{loginError && <p>{loginError}</p>}</div> */}
        </form>
        <p>
          New to doctors portal?{" "}
          <Link className="text-secondary" to="/register">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;