function Save() {
  var val = this.refs.newText.getDOMNode().value;
  console.log('Save ' + val);
  this.setState({editing: false});
}
