"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

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

  const handleDelete = async (id) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this customer?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/customer/${id.toString()}`, {
          method: "DELETE",
        });
        window.location.reload();
        const filteredcustomers = customers.filter((item) => item._id !== id);

        setCustomers(filteredcustomers);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <main>
      <h3 className="text-center mt-5">
        <b>Customer Details</b>
      </h3>
      <div className="container mt-3">
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
                  <td>
                    <Link href={`/customer/${cust._id}`} className="black_btn">
                      {cust.name}
                    </Link>
                  </td>
                  <td>{cust.email}</td>
                  <td>{cust.phno}</td>
                  <td>
                    <div className="row">
                      <span
                        className="btn btn-danger"
                        onClick={() => handleDelete(cust._id)}
                      >
                        <FaTrash />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
