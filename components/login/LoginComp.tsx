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
import GoogleIcon from "@/public/icons/google.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SchemaSignIn, SchemaSignUp } from "@/lib/schema";
import Image from "next/image";

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
            <Image src={GoogleIcon} width={24} height={24} alt="google" />
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
