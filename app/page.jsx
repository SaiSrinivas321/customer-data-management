"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
