// these appointments are being rendered by the AppointmentsList component

class Appointment extends React.Component {
  render () {
    return (
      // set up how each appointment will be rendered
      <div className="card card-body mt-2">
        <h3>{this.props.appointment.title}</h3>
        <p>{formatDate(this.props.appointment.start_time)}</p>
      </div>
    );
  }
}


