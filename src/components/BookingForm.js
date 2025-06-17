import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookingForm = ({ slots }) => {
  const [formData, setFormData] = useState({ name: "", email: "", time: "" });
  const navigate = useNavigate();
  //   const apiUrl = process.env;
  //   console.log("apiUrl : ", apiUrl);
  //   console.log("apiUrl : ", process.env.REACT_APP_API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `https://mini-appointment-booking-portal-be.onrender.com/api/bookings`,
      formData
    );
    navigate("/confirmation");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-50 mx-auto mt-5 p-4 border rounded shadow"
    >
      <h3 className="text-center mb-4 text-primary">Book Appointment</h3>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Time Slot</Form.Label>
        <Form.Select
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        >
          <option value="">Select a time slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Book Now
      </Button>
    </Form>
  );
};

export default BookingForm;
