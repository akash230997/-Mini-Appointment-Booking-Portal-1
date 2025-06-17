import BookingForm from "../components/BookingForm";

const Home = () => {
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <div className="container">
      <h1 className="text-center mb-4 mt-5 text-primary">
        Mini Appointment Booking Portal
      </h1>
      <BookingForm slots={timeSlots} />
    </div>
  );
};

export default Home;
