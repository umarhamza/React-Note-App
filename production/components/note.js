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
    edit: function Edit() {
        this.setState({editing: true});
    }, // edit

    save: function Save() {
      var val = this.refs.newText.getDOMNode().value;
      alert('Save ' + val);
      this.setState({editing: false});
    }, // save

    remove: function() {
        alert('removing');
    }, // remove


    // ----------------------------------------------------------------
    // SUB COMPONENTS
    // ----------------------------------------------------------------
    renderDisplay: function() {
      return (
          <div className="note">
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
          <div className="note">
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
