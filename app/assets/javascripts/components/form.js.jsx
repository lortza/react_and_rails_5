var Form = createReactClass({

  // When the input field changes, call this method, which will call onUserInput from the Appointment parent.
  handleChange: function(e){
    // Build the object that will be passed back to the parent
    obj = {};
    obj[e.target.name] = e.target.value;
    // Call the function that will set the parent's state
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e){
    e.preventDefault()
    this.props.onFormSubmit()
  },

  setApptTime: function(e){
    obj = {};
    if(obj['start_time'] = e.toDate()){
      // Call the function that will set the state
      this.props.onUserInput(obj)
    }
  },

  render: function() {
    // let inputNameProp = {name: 'start_time'}

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          name='title'
          className='form-control'
          value={this.props.title}
          onChange={this.handleChange}
        />

        <label>Start Time</label>

        <Datetime
          open={true}
          input={false}
          inputProps={ {name: 'start_time'} }
          value={this.props.start_time}
          onChange={this.setApptTime}
        />
        <input type='submit' value='Make Appointment' className="btn btn-xs btn-primary" />
      </form>
    );
  }
});
