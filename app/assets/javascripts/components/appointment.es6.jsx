// these appointments are being rendered by the AppointmentsList component

// Use destructuring to convert props to appointment
const Appointment = ({appointment}) => {
  return (
    // set up how each appointment will be rendered
    <div className="card card-body mt-2">
      <h3>{appointment.title}</h3>
      <p>{formatDate(appointment.start_time)}</p>
    </div>
  );
}


