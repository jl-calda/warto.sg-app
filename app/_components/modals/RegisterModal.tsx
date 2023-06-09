"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import useRegisterModal from "@/app/_hooks/useRegisterModal";

import Modal from "./Modal";
import Heading from "../utils/Heading";
import Input from "../inputs/Input";
import Button from "../utils/Button";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/_hooks/useLoginModal";

const RegisterModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onGoogleSignIn = () => {
    setIsLoading(true);
    signIn("google")
      .then(() => {
        toast.success("Login Successful");
        router.refresh();
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error(`${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    axios
      .post(`/api/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(() => {
        toast.success("Registration Successful");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch(() => {
        toast.error("Registration Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleModal = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col space-y-2">
      <Heading
        title="Create an account and start posting"
        subtitle="Just enter the following information"
      />
      <div className="flex flex-col space-y-2 py-4">
        <Input
          id="name"
          type="text"
          label="Name"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          type="password"
          label="Password"
          register={register}
          errors={errors}
          required
          isPassword
        />
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          register={register}
          errors={errors}
          required
          isPassword
        />
      </div>
      <hr className="w-full" />
      <div className="flex flex-col space-y-2 pt-4">
        <Button
          outline
          icon={FcGoogle}
          label="Google"
          onClick={onGoogleSignIn}
        />
        <Button
          outline
          icon={FaGithub}
          label="Github"
          onClick={() => signIn("github")}
        />
      </div>
    </div>
  );

  const footer = (
    <div className="flex flex-row space-x-2 items-center justify-center">
      <span className="font-light text-sm">Already have an account?</span>
      <span
        onClick={toggleModal}
        className="cursor-pointer transition hover:text-teal-800 text-sm font-bold"
      >
        Login
      </span>
    </div>
  );

  return (
    <Modal
      actionLabel="Continue"
      body={bodyContent}
      disabled={isLoading}
      footer={footer}
      isOpen={registerModal.isOpen}
      title="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
