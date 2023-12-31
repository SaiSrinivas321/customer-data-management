"use client";
import Form from "@components/Form";
import { isValidEmail, isValidName, isValidPhoneNumber } from "@utils";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidName(formData.name)) {
      setError({ ...errorMsg, nameError: "Please Enter a Valid Name" });
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError({ ...errorMsg, emailError: "Please Enter a Valid Mail" });
      return;
    }
    if (!isValidPhoneNumber(formData.phno)) {
      setError({
        ...errorMsg,
        phnoError: "Please Enter a Valid Mobile Number",
      });
      return;
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
