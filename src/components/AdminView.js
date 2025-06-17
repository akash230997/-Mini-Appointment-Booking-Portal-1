import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

const AdminView = () => {
  const [bookings, setBookings] = useState([]);
  // `${process.env.REACT_APP_API_URL}/api/bookings`
  // "http://localhost:5000/api/bookings"
  useEffect(() => {
    axios
      .get(
        `https://mini-appointment-booking-portal-be.onrender.com/api/bookings`
      )
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="mt-5">
      <h3 className="text-primary mb-4">📋 All Appointments</h3>
      {bookings.map((b, idx) => (
        <Card key={idx} className="mb-3">
          <Card.Body>
            <Card.Title>{b.name}</Card.Title>
            <Card.Text>
              <strong>Email:</strong> {b.email}
              <br />
              <strong>Time:</strong> {b.time}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AdminView;
