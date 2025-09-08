import React, { useState } from "react";

function Driver() {
  const [formData, setFormData] = useState({
    VehicleNumber: "",
    DriverName: "",
    DriverContact: "",
    FleetOwnerName: "",
    FleetOwnerContact: "",
    FleetOwnerEmail: "",
    JobType: "",
    Category: "",
    SubCategory: "",
    Status: "",
  });

  const [errors, setErrors] = useState({});

  const Services = {
    "General Service": {
      Interior: ["Working", "Not Working", "OK"],
      Exterior: ["Working", "Not Working", "OK"],
      Tire: {
        Pressure: ["Working", "Not Working", "OK"],
        Wear: ["Working", "Not Working", "OK"],
      },
    },
    "Quick Service": {
      Interior: ["Working", "Not Working", "OK"],
      Exterior: ["Working", "Not Working", "OK"],
      Tire: ["Working", "Not Working", "OK"],
    },
    "Comprehensive Service": {
      Interior: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
      Exterior: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
      Tire: {
        Pressure: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
        Wear: ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
      },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "JobType" && { Category: "", SubCategory: "", Status: "" }),
      ...(name === "Category" && { SubCategory: "", Status: "" }),
      ...(name === "SubCategory" && { Status: "" }),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});

    const newErrors = {};
    for (let field in formData) {
      if (!formData[field].trim()) {
        newErrors[field] = `${field} is required`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  const categories =
    formData.JobType && Object.keys(Services[formData.JobType]);
  const selectedCategory =
    formData.JobType && formData.Category
      ? Services[formData.JobType][formData.Category]
      : null;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Driver & Service Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Vehicle Number */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Vehicle Number</label>
          <input
            type="text"
            name="VehicleNumber"
            value={formData.VehicleNumber}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.VehicleNumber && (
            <p style={styles.error}>{errors.VehicleNumber}</p>
          )}
        </div>

        {/* Driver Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Driver Name</label>
          <input
            type="text"
            name="DriverName"
            value={formData.DriverName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.DriverName && <p style={styles.error}>{errors.DriverName}</p>}
        </div>

        {/* Driver Contact */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Driver Contact</label>
          <input
            type="text"
            name="DriverContact"
            value={formData.DriverContact}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.DriverContact && (
            <p style={styles.error}>{errors.DriverContact}</p>
          )}
        </div>

        {/* Fleet Owner Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Fleet Owner Name</label>
          <input
            type="text"
            name="FleetOwnerName"
            value={formData.FleetOwnerName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.FleetOwnerName && (
            <p style={styles.error}>{errors.FleetOwnerName}</p>
          )}
        </div>

        {/* Fleet Owner Contact */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Fleet Owner Contact</label>
          <input
            type="text"
            name="FleetOwnerContact"
            value={formData.FleetOwnerContact}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.FleetOwnerContact && (
            <p style={styles.error}>{errors.FleetOwnerContact}</p>
          )}
        </div>

        {/* Fleet Owner Email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Fleet Owner Email</label>
          <input
            type="email"
            name="FleetOwnerEmail"
            value={formData.FleetOwnerEmail}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.FleetOwnerEmail && (
            <p style={styles.error}>{errors.FleetOwnerEmail}</p>
          )}
        </div>

        {/* Job Type */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Job Type</label>
          <select
            name="JobType"
            value={formData.JobType}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Here</option>
            {Object.keys(Services).map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>
          {errors.JobType && <p style={styles.error}>{errors.JobType}</p>}
        </div>

        {/* Category */}
        {formData.JobType && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Category</label>
            <select
              name="Category"
              value={formData.Category}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.Category && <p style={styles.error}>{errors.Category}</p>}
          </div>
        )}

        {/* SubCategory */}
        {formData.Category &&
          selectedCategory &&
          typeof selectedCategory === "object" &&
          !Array.isArray(selectedCategory) && (
            <div style={styles.formGroup}>
              <label style={styles.label}>SubCategory</label>
              <select
                name="SubCategory"
                value={formData.SubCategory}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select Sub</option>
                {Object.keys(selectedCategory).map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
              {errors.SubCategory && (
                <p style={styles.error}>{errors.SubCategory}</p>
              )}
            </div>
          )}

        {/* Status */}
        {formData.Category &&
          ((Array.isArray(selectedCategory) && selectedCategory.length > 0) ||
            (formData.SubCategory &&
              selectedCategory[formData.SubCategory])) && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Status</label>
              <select
                name="Status"
                value={formData.Status}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select Status</option>
                {Array.isArray(selectedCategory)
                  ? selectedCategory.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))
                  : selectedCategory[formData.SubCategory].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
              </select>
              {errors.Status && <p style={styles.error}>{errors.Status}</p>}
            </div>
          )}

        {/* Submit */}
        <button type="submit" style={styles.button}>
          Submit Details
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    background: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
  },
};

export default Driver;
