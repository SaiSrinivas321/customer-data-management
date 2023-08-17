"use client";
import Form from "@components/Form";
import { isValidEmail, isValidName, isValidPhoneNumber } from "@utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const viewCustomer = ({ params }) => {
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

  const getCustomerData = async () => {
    const response = await fetch(`/api/customer/${params.id}`);
    const data = await response.json();
    setFormData({ name: data.name, email: data.email, phno: data.phno });
  };
  useEffect(() => {
    getCustomerData();
  }, []);

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
      const response = await fetch(`/api/customer/${params.id}`, {
        method: "PATCH",
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
    <>
      <h3 className="text-center mt-5">
        <b>Customer Details</b>
      </h3>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        errorMsg={errorMsg}
      />
    </>
  );
};

export default viewCustomer;
