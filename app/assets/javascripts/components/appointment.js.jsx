// these appointments are being rendered by the AppointmentsList component
const Appointment = (props) =>{
  return (
    // set up how each appointment will be rendered
    <div className="card card-body mt-2">
      <h3>{props.appointment.title}</h3>
      <p>{formatDate(props.appointment.start_time)}</p>
    </div>
  )// return
};



