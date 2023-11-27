"use client";
import { UserAuth } from "@/app/[locale]/context/AuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import { classNames } from "@/constants/common";
import { ToastInput, useToasts } from "@geist-ui/core";
import { alertMessage, errorMessages } from "@/constants";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SchemaSignIn, SchemaSignUp } from "@/lib/schema";

type Person = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginComp = () => {
  const { user, googleSignIn, nativeSignIn, createUser } = UserAuth();
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const schema = isCreateAccount ? SchemaSignUp : SchemaSignIn;
  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    isCreateAccount
      ? handleCreateUser(data as Person)
      : handleSignIn(data as Person);
  };

  const handleSignIn = async (person: Person) => {
    try {
      await nativeSignIn(person.email, person.password);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  const handleCreateUser = async (person: Person) => {
    try {
      await createUser(person.email, person.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {isCreateAccount ? "Sign up" : "Sign in"}
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              {...register("email")}
              className={classNames(
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                errors.email && "border-red-500"
              )}
              placeholder="peter.nguyen@gmail.com"
            />
            <ErrorMessage name="email" errors={errors} />
          </div>
          <div>
            <div>
              <PasswordInput
                name="password"
                register={register}
                errors={errors}
              />
            </div>
            <div
              className={classNames(
                isCreateAccount ? "h-22 mt-4" : "h-0",
                "transition-all duration-400 overflow-hidden w-full"
              )}>
              <PasswordInput
                name="confirmPassword"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Forgot Password?
            </a>
          </div>
          <CustomButton
            title={isCreateAccount ? "Create account" : "Log in"}
            btnType="submit"
            containerStyles="btn-add-to-cart-full"
          />
          <div className="divider">OR</div>
        </form>
        <CustomButton
          title="Login with Google"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
          }
          handleClick={handleSignInWithGoogle}
          btnType="submit"
          containerStyles="my-4 flex w-full px-20 py-2 items-center justify-center border border-primary bg-white text-sm font-medium text-primary hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        />
        <div className="flex flex-row text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <CustomButton
            handleClick={() => setIsCreateAccount(!isCreateAccount)}
            containerStyles="text-blue-700 hover:underline dark:text-blue-500 px-2"
            title={isCreateAccount ? "Log in" : "Create account"}
          />
        </div>
      </div>
    </div>
  );
};

const PasswordInput = (props: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { name, register, errors } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {name == "password" ? "Your password" : "Confirm password"}
      </label>
      <div className="relative flex justify-between">
        <input
          type={isPasswordVisible ? "text" : "password"}
          {...register(name)}
          placeholder="••••••••"
          className={classNames(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
            errors[name] && "border-red-500"
          )}
        />
        <button
          type="button"
          className="absolute right-0 inset-y-0 flex items-center mr-2"
          onClick={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}>
          {isPasswordVisible ? (
            <EyeIcon className=" w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      <ErrorMessage name={name} errors={errors} />
    </>
  );
};

const ErrorMessage = (props: any) => {
  const { errors, name } = props;
  return (
    errors[name] && (
      <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-400">
        {errors[name].message}
      </p>
    )
  );
};

export default LoginComp;
