import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CarForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    carNumber: "",
    driverName: "",
    startTime: "",
    endTime: "",
  });

  const [submittedData, setSubmittedData] = useState([]); // Initialize as empty array

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      startTime: new Date(formData.startTime).toLocaleString(),
      endTime: new Date(formData.endTime).toLocaleString(),
    };
    if (submittedData !== undefined) {
      setSubmittedData((prevData) => [...prevData, formattedData]);
    }

    setFormData({ carNumber: "", driverName: "", startTime: "", endTime: "" });
  };
  console.log(submittedData);
  return (
    <div>
      <h2>Car Trip Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="carNumber">Car Number:</label>
          <input
            type="text"
            id="carNumber"
            name="carNumber"
            value={formData.carNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="driverName">Driver Name:</label>
          <input
            type="text"
            id="driverName"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 &&
        submittedData !== undefined &&
        submittedData.map((value, index) => (
            <DataTable value={submittedData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            <Column field="driverName" header="Name" style={{ width: '25%' }}></Column>
            {/* <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
            <Column field="company" header="Company" style={{ width: '25%' }}></Column>
            <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column> */}
        </DataTable>
        ))}
    </div>
  );
};

export default CarForm;
