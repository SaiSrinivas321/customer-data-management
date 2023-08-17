"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const response = await fetch("/api/customer");
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <main>
      <h3 className="text-center mt-5">
        <b>Customer Details</b>
      </h3>
      <div className="container text-center mt-3">
        <button
          className="btn btn-primary float-end mb-2"
          onClick={() => router.push("/customer/new")}
        >
          Add Customer
        </button>
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, ind) => {
              return (
                <tr key={cust._id}>
                  <th scope="row">{ind + 1}</th>
                  <td>{cust.name}</td>
                  <td>{cust.email}</td>
                  <td>{cust.phno}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
