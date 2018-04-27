class Label extends React.Component {
  render () {
    return (
      <React.Fragment>
        <label className="form-label">{this.props.label}</label>
      </React.Fragment>
    );
  }
}

Label.propTypes = {
  label: PropTypes.string
};

