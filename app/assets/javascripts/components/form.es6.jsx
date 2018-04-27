class Form extends React.Component {
  // When the input field changes, call this method, which will call onUserInput from the Appointment parent.
  handleChange(e) {
    // Build the object that will be passed back to the parent
    const obj = {};
    obj[e.target.name] = e.target.value;
    // Call the function that will set the parent's state
    this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onFormSubmit()
  }

  setApptTime(e){
    const obj = {};
    if(obj['start_time'] = e.toDate()){
      // Call the function that will set the state
      this.props.onUserInput(obj)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Label
        name='label'
          label='Enter a title, date, and time'
        />
        <input
          name='title'
          className='form-control mb-2'
          value={this.props.title}
          onChange={this.handleChange.bind(this)}
        />

        <Datetime
          open={true}
          input={false}
          inputProps={ {name: 'start_time'} }
          value={this.props.start_time}
          onChange={this.setApptTime.bind(this)}
        />
        <input type='submit' value='Make Appointment' className="btn btn-xs btn-primary" />
      </form>
    );
  }
}
