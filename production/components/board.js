var Board = React.createClass({

  // ----------------------------------------------------------------
  // REACT LIFE CYCLE
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

  getInitialState: function () {
    return {
      notes: []
    } // return
  }, // getInitialState


  // ----------------------------------------------------------------
  // HELPERS
  // ----------------------------------------------------------------
  nextId: function () {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }, // nextId


  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------

    add: function (text) {
      var arr = this.state.notes;
      arr.push({
        id: this.nextId(),
        note: text
      });
      this.setState({notes:arr});
    }, // add

    update: function (newText, i) {
      var arr = this.state.notes;
      arr[i].note = newText;
      this.setState({notes:arr});
    }, // update

    remove: function (i) {
      var arr = this.state.notes;
      arr.splice(i, 1);
      this.setState({notes:arr});
    }, // remove

    eachNote: function (note, i) {
      return (
        <Note key={note.id}
              index={i}
              onChange={this.update}
              onRemove={this.remove}
        >{note.note}</Note>
      );
    }, // eachNote


    // ----------------------------------------------------------------
    // RENDER
    // ----------------------------------------------------------------

    render: function() {
      return (
        <div className="board">
          {this.state.notes.map(this.eachNote)}
          <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
          onClick={this.add.bind(null, 'New note...')} />
        </div>
      ) // return
    } // render
}); // Board


// ----------------------------------------------------------------
// REACT RENDER METHODS
// ----------------------------------------------------------------

React.render(
    <Board count='10' />,
    document.getElementById('react-container')
); // render
