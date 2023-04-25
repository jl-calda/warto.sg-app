"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

import useRegisterModal from "@/app/_hooks/useRegisterModal";

import Modal from "./Modal";
import Heading from "../utils/Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
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
      })
      .catch(() => {
        toast.error("Registration Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col space-y-2">
      <Heading
        title="Create an account and start posting"
        subtitle="Just enter the following information"
      />
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
  );

  return (
    <Modal
      actionLabel="Continue"
      body={bodyContent}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      secondaryLabel="Register an account"
      title="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
