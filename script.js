'use strict';

var Board = React.createClass({
  displayName: 'Board',

  propTypes: {
    count: function count(props, propName) {
      if (typeof props[propName] !== 'number') {
        return new Error('Count prop must be a number');
      }

      if (props[propName] > 100) {
        return new Error('Creating' + props[propName] + 'notes is rediculous');
      }
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'board' },
      this.props.count
    );
  }
});
"use strict";

var Note = React.createClass({
  displayName: "Note",

  getInitialState: NoteInitState,
  edit: Edit,
  save: Save,
  remove: Remove,
  renderDisplay: RenderDisplay,
  renderForm: RenderForm,
  render: function render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
});
"use strict";

function RenderDisplay() {
    return React.createElement(
        "div",
        { className: "note" },
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
}
;"use strict";

function RenderForm() {
  return React.createElement(
    "div",
    { className: "note" },
    React.createElement("textarea", { ref: "newText", defaultValue: this.props.children, className: "form-control" }),
    React.createElement("button", { onClick: this.save, className: "btn btn-success btn-sm glyphicon glyphicon-floppy-disk" })
  );
}
;'use strict';

React.render(React.createElement(Board, { count: '10' }), document.getElementById('react-container'));
"use strict";

function Edit() {
    this.setState({ editing: true });
}
;"use strict";

function NoteInitState() {
  return { editing: false };
}
;'use strict';

function Remove() {
    alert('removing');
}
;'use strict';

function Save() {
  var val = this.refs.newText.getDOMNode().value;
  console.log('Save ' + val);
  this.setState({ editing: false });
}
;"use strict";

//@prepros-prepend components/**/*.js
//@prepros-prepend functions/**/*.js
