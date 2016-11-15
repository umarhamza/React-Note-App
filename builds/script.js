"use strict";

var Note = React.createClass({
  displayName: "Note",

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
  edit: function edit() {
    this.setState({ editing: true });
  }, // edit

  save: function save() {
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
    this.setState({ editing: false });
  }, // save

  remove: function remove() {
    this.props.onRemove(this.props.index);
  }, // remove

  // ----------------------------------------------------------------
  // SUB COMPONENTS
  // ----------------------------------------------------------------
  renderDisplay: function renderDisplay() {
    return React.createElement(
      "div",
      { className: "note", style: this.style },
      React.createElement(
        "p",
        null,
        this.props.children
      ),
      React.createElement(
        "span",
        null,
        React.createElement("button", { onClick: this.edit,
          className: "btn btn-primary glyphicon glyphicon-pencil" }),
        React.createElement("button", { onClick: this.remove,
          className: "btn btn-danger glyphicon glyphicon-trash" })
      )
    );
  }, // renderDisplay

  renderForm: function renderForm() {
    return React.createElement(
      "div",
      { className: "note", style: this.style },
      React.createElement("textarea", { ref: "newText", defaultValue: this.props.children, className: "form-control" }),
      React.createElement("button", { onClick: this.save, className: "btn btn-success btn-sm glyphicon glyphicon-floppy-disk" })
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
  // REACT LIFE CYCLE
  // ----------------------------------------------------------------
  getInitialState: function getInitialState() {
    return {
      notes: []
    } // return
    ;
  }, // getInitialState

  componentWillMount: function componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + px,
      top: this.randomBetween(0, window.innerHeight - 150) + px,
      transform: 'rotate(' + this.randomBetween(-15, -15) + 'deg)'

    } // style
    ;
  }, // componentWillMount

  // ----------------------------------------------------------------
  // HELPERS
  // ----------------------------------------------------------------
  randomBetween: function randomBetween(min, max) {
    return min + Math.ceil(Math.random() * max); // return
  }, // randomBetween

  nextId: function nextId() {}, // nextId

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

  add: function add(text) {
    var arr = this.state.notes;
    arr.push(text);
    this.setState({ notes: arr });
  }, // add

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

  eachNote: function eachNote(note, i) {
    return React.createElement(
      Note,
      { key: i,
        index: i,
        onChange: this.update,
        onRemove: this.remove
      },
      note
    );
  }, // eachNote

  // ----------------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------------

  render: function render() {
    return React.createElement(
      'div',
      { className: 'board' },
      this.state.notes.map(this.eachNote),
      React.createElement('button', { className: 'btn btn-sm btn-success glyphicon glyphicon-plus',
        onClick: this.add.bind(null, 'New note...') })
    ); // return
  } // render
}); // Board

// ----------------------------------------------------------------
// REACT RENDER METHODS
// ----------------------------------------------------------------

React.render(React.createElement(Board, { count: '10' }), document.getElementById('react-container')); // render
;"use strict";

//@prepros-prepend components/note.js
//@prepros-prepend components/board.js
