import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ResumeUploadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    resume: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phno", formData.phno);
    data.append("resume", formData.resume);

    try {
      const response = await axios.post("http://localhost:8080/upload-resume", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading resume.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Resume Upload Form</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phno" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phno"
            name="phno"
            placeholder="Enter your phone number"
            value={formData.phno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Upload Resume</label>
          <input
            type="file"      className="form-control" id="resume" name="resume"  onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResumeUploadForm;
