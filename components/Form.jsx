import { Fragment } from "react";
import "../app/globals.css";

const Form = ({ title, formData, setFormData, handleSubmit, errorMsg }) => {
  return (
    <Fragment>
      {title && (
        <h3 className="text-center mt-5">
          <b>{title} Customer</b>
        </h3>
      )}
      <div className="container mt-2">
        {errorMsg && errorMsg.nameError && (
          <div className="alert alert-danger" role="alert">
            {errorMsg.nameError}
          </div>
        )}
        {errorMsg && errorMsg.emailError && (
          <div className="alert alert-danger" role="alert">
            {errorMsg.emailError}
          </div>
        )}
        {errorMsg && errorMsg.phnoError && (
          <div className="alert alert-danger" role="alert">
            {errorMsg.phnoError}
          </div>
        )}
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

          <button
            type="submit"
            className={title ? "btn btn-primary" : "btn btn-success"}
          >
            {title ? "Add Customer" : "Edit Customer"}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
