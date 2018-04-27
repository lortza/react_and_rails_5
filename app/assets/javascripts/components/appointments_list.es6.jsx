const AppointmentsList = ({appointments}) => {
  return (
    <div id="appointments-list">
      {appointments.map(function(appt){
        return(
          // pass the appt data to the Appointment component
          // you also need to set a unique key for each mapped component
          <Appointment key={appt.id} appointment={appt}/>
        )
      })}
    </div>
  )// return
}
