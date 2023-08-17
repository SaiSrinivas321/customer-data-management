"use client";
import Form from "@components/Form";
import { useState } from "react";
const addCustomer = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidName(formData.name)) {
      setError({ ...errorMsg, nameError: "Please Enter a Valid Mail" });
    }
    alert(JSON.stringify(formData));
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
