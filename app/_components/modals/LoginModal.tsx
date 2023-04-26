"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import useRegisterModal from "@/app/_hooks/useRegisterModal";
import useLoginModal from "@/app/_hooks/useLoginModal";

import Modal from "./Modal";
import Heading from "../utils/Heading";
import Input from "../inputs/Input";
import Button from "../utils/Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
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
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then(() => {
        setIsLoading(false);
        toast.success("Login Successful");
        router.refresh();
        loginModal.onClose();
      })
      .catch(() => {
        toast.error("Registration Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggleModal = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col space-y-2">
      <Heading
        title="Login with your account"
        subtitle="Nice to see you again."
      />
      <div className="flex flex-col space-y-2 py-4">
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
      </div>
      <hr className="w-full" />
      <div className="flex flex-col space-y-2 pt-4">
        <Button
          outline
          icon={FcGoogle}
          label="Google"
          onClick={() => {
            signIn("google");
          }}
        />
        <Button
          outline
          icon={FaGithub}
          label="Github"
          onClick={() => {
            signIn("github");
          }}
        />
      </div>
    </div>
  );

  const footer = (
    <div className="flex flex-row space-x-2 items-center justify-center">
      <span className="font-light text-sm">Don't have an account?</span>
      <span
        onClick={toggleModal}
        className="cursor-pointer transition hover:text-teal-800 text-sm font-bold"
      >
        Register
      </span>
    </div>
  );

  return (
    <Modal
      actionLabel="Continue"
      body={bodyContent}
      disabled={isLoading}
      footer={footer}
      isOpen={loginModal.isOpen}
      title="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;
