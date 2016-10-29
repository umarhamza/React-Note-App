var Board = React.createClass({
    propTypes: {
      count: function(props, propName) {
        if (typeof props[propName] !== "number") {
          return new Error('Count prop must be a number');
        }

        if (props[propName] > 100) {
          return new Error('Creating' +props[propName]+ 'notes is rediculous');
        }
      }
    },
    render: function() {
      return (
        <div className="board">
          {this.props.count}
        </div>
      );
    }
});
