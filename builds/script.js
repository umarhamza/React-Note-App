'use strict';

var Note = React.createClass({
  displayName: 'Note',

  // ----------------------------------------------------------------
  // INITIAL STATE
  // ----------------------------------------------------------------
  getInitialState: function getInitialState() {
    return {
      editing: false
    } // return
    ;
  },

  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------
  edit: function Edit() {
    this.setState({ editing: true });
  }, // edit

  save: function Save() {
    var val = this.refs.newText.getDOMNode().value;
    alert('Save ' + val);
    this.setState({ editing: false });
  }, // save

  remove: function remove() {
    alert('removing');
  }, // remove

  // ----------------------------------------------------------------
  // SUB COMPONENTS
  // ----------------------------------------------------------------
  renderDisplay: function renderDisplay() {
    return React.createElement(
      'div',
      { className: 'note' },
      React.createElement(
        'p',
        null,
        this.props.children
      ),
      React.createElement(
        'span',
        null,
        React.createElement('button', { onClick: this.edit,
          className: 'btn btn-primary glyphicon glyphicon-pencil' }),
        React.createElement('button', { onClick: this.remove,
          className: 'btn btn-danger glyphicon glyphicon-trash' })
      )
    );
  }, // renderDisplay

  renderForm: function renderForm() {
    return React.createElement(
      'div',
      { className: 'note' },
      React.createElement('textarea', { ref: 'newText', defaultValue: this.props.children, className: 'form-control' }),
      React.createElement('button', { onClick: this.save, className: 'btn btn-success btn-sm glyphicon glyphicon-floppy-disk' })
    );
  }, // renderForm

  // ----------------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------------

  render: function render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}); // Note
;'use strict';

var Board = React.createClass({
  displayName: 'Board',

  // ----------------------------------------------------------------
  // INITIAL STATE
  // ----------------------------------------------------------------
  getInitialState: function getInitialState() {
    return {
      notes: ['Call Bill', 'Email Lisa', 'Make apts', 'Send message'] // notes
    } // return
    ;
  }, // getInitialState

  // ----------------------------------------------------------------
  // METHODS
  // ----------------------------------------------------------------
  propTypes: {
    count: function count(props, propName) {

      if (typeof props[propName] !== 'number') {
        return new Error('Count prop must be a number');
      } // if NaN

      if (props[propName] > 100) {
        return new Error('Creating' + props[propName] + 'notes is rediculous');
      } // if more than 100
    } // count
  }, // propTypes

  update: function update(newText, i) {
    var arr = this.state.notes;
    arr[i] = newText;
    this.setState({ notes: arr });
  }, // update

  remove: function remove(i) {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({ notes: arr });
  }, // remove

  // ----------------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------------

  render: function render() {
    return React.createElement(
      'div',
      { className: 'board' },
      this.state.notes.map(function (note, i) {
        return React.createElement(
          Note,
          { key: i },
          note
        );
      }),
      ' //map'
    ); // return
  } // render
}); // Board

// ----------------------------------------------------------------
// REACT RENDER METHODS
// ----------------------------------------------------------------

React.render(React.createElement(Board, { count: '10' }), document.getElementById('react-container')); // render
// return
;"use strict";

//@prepros-prepend components/note.js
//@prepros-prepend components/board.js
