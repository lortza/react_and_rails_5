var Appointments = createReactClass({
  // Set the initial state via the props. The props are getting their info from the index.html.erb
  getInitialState: function(){
    return {
      appointments: this.props.data,
      title: ' ',
      start_time: new Date()
    }
  },

  // This method gets its callback object from the form input
  handleUserInput: function(obj){
    // set the state to the new input field values
    this.setState(obj)
  },

  // Post an ajax request to the appointments controller
  handleFormSubmit: function(){
    let appt = {
      title: this.state.title,
      start_time: this.state.start_time
    }
    // hit the appointments_controller#create, passing it the params and data it needs
    $.post('/appointments', {appointment: appt})
     .then(function(data){
        this.addNewAppointment(appt)
     }.bind(this))
  },

  addNewAppointment: function(appt){
    // Push the new appointment into the state's array
    let allAppts = this.state.appointments
    allAppts.push(appt)

    // Set the state array in chrono order
    this.setState({
      appointments: allAppts.sort(function(a,b){
        return new Date(a.start_time) - new Date(b.start_time);
      })
    })//setState
  },

  render: function() {
    return (
      <React.Fragment>

        <Form
          title={this.state.title}
          start_time={this.state.start_time}
          // this prop passes this function to the Form
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
        />

        <AppointmentsList appointments={this.state.appointments} />

      </React.Fragment>
    )// return
  }
});



