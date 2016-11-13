var Board = React.createClass({

  // ----------------------------------------------------------------
  // INITIAL STATE
  // ----------------------------------------------------------------
  getInitialState: function () {
    return {
      notes: [
        'Call Bill',
        'Email Lisa',
        'Make apts',
        'Send message'
      ] // notes
    } // return
  }, // getInitialState

  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------
    propTypes: {
      count: function(props, propName) {

        if (typeof props[propName] !== "number") {
          return new Error('Count prop must be a number');
        } // if NaN

        if (props[propName] > 100) {
          return new Error('Creating' +props[propName]+ 'notes is rediculous');
        } // if more than 100

      } // count
    }, // propTypes

    update: function (newText, i) {
      var arr = this.state.notes;
      arr[i] = newText;
      this.setState({notes:arr});
    }, // update

    remove: function (i) {
      var arr = this.state.notes;
      arr.splice(i, 1);
      this.setState({notes:arr});
    }, // remove

    eachNote: function (note, i) {
      return (
        <Note key={i}
              index={i}
              onChange={this.update}
              onRemove={this.update}
        >{note}</Note>
      );
    }, // eachNote

    // ----------------------------------------------------------------
    // RENDER
    // ----------------------------------------------------------------

    render: function() {
      return (
        <div className="board">
          {this.state.notes.map(function (note, i) {
            return (
            ); // return
          })} //map
        </div>
      ); // return
    } // render
}); // Board


// ----------------------------------------------------------------
// REACT RENDER METHODS
// ----------------------------------------------------------------

React.render(
    <Board count='10' />,
    document.getElementById('react-container')
); // render
