"use client";
import Form from "@components/Form";
import { useRouter } from "next/navigation";
import { useState } from "react";
const addCustomer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
  });
  const [errorMsg, setError] = useState({
    nameError: "",
    emailError: "",
    phnoError: "",
  });
  const isValidName = (name) => {
    const nameregex = /^[A-Za-z\s'-]+$/;
    return nameregex.test(name.trim());
  };

  const isValidEmail = (email) => {
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailregex.test(email.trim());
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberregex = /^[6-9]\d{9}$/;
    return phoneNumberregex.test(phoneNumber.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidName(formData.name)) {
      setError({ ...errorMsg, nameError: "Please Enter a Valid Name" });
    }
    if (!isValidEmail(formData.email)) {
      setError({ ...errorMsg, emailError: "Please Enter a Valid Mail" });
    }
    if (!isValidPhoneNumber(formData.phno)) {
      setError({
        ...errorMsg,
        phnoError: "Please Enter a Valid Mobile Number",
      });
    }
    try {
      const response = await fetch("/api/customer/new", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phno: formData.phno,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      title={"Add"}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      errorMsg={errorMsg}
    />
  );
};

export default addCustomer;
