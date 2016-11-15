var Note = React.createClass({

  // ----------------------------------------------------------------
  // INITIAL STATE
  // ----------------------------------------------------------------
    getInitialState: function() {
      return {
        editing: false
      } // return
    },


    // ----------------------------------------------------------------
    // METHODS
    // ----------------------------------------------------------------
    edit: function () {
        this.setState({editing: true});
    }, // edit

    save: function () {
      this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
      this.setState({editing: false});
    }, // save

    remove: function () {
      this.props.onRemove(this.props.index);
    }, // remove


    // ----------------------------------------------------------------
    // SUB COMPONENTS
    // ----------------------------------------------------------------
    renderDisplay: function() {
      return (
          <div className="note" style={this.style}>
          <p>{this.props.children}</p>
              <span>
                  <button onClick={this.edit}
                          className="btn btn-primary glyphicon glyphicon-pencil" />
                  <button onClick={this.remove}
                          className="btn btn-danger glyphicon glyphicon-trash" />
              </span>
          </div>
      );
    }, // renderDisplay


    renderForm: function() {
        return (
          <div className="note" style={this.style}>
            <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
          </div>
        );
    }, // renderForm


    // ----------------------------------------------------------------
    // RENDER
    // ----------------------------------------------------------------

    render: function() {
      if (this.state.editing) {
        return this.renderForm();
      } else {
        return this.renderDisplay();
      }
    }
}); // Note
