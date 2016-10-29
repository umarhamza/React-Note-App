var Note = React.createClass({
    getInitialState: NoteInitState,
    edit: Edit,
    save: Save,
    remove: Remove,
    renderDisplay: RenderDisplay,
    renderForm: RenderForm,
    render: function() {
      if (this.state.editing) {
        return this.renderForm();
      } else {
        return this.renderDisplay();
      }
    }
});
