var Form = createReactClass({

  // When the input field changes, call this method, which will call onUserInput from the parent.
  handleChange: function(e){
    // build the object that will be passed back to the parent
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    // call the function that will set the state
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e){
    e.preventDefault()
    this.props.onFormSubmit()
  },

  setApptTime: function(e){
    let name = 'start_time'
    obj = {};
    if(obj[name] = e.toDate()){
      // call the function that will set the state
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
        <input type='submit' value='Make Appointment' />
      </form>
    );
  }
});
