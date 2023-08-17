import { Fragment } from "react";
import "../app/globals.css";

const Form = ({ title, formData, setFormData, handleSubmit, errorMsg }) => {
  return (
    <Fragment>
      <h3 className="text-center mt-5">
        <b>{title} Customer</b>
      </h3>
      <div className="container mt-2">
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label required">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              required
              aria-describedby="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label required">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              required
              value={formData.phno}
              onChange={(e) =>
                setFormData({ ...formData, phno: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
