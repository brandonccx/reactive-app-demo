import React from 'react';
import { connect } from 'react-redux';
import { addApp } from '../actions/app';

const mapDispatchToProps = dispatch => ({
  onClick: name => dispatch(addApp(name))
});

class AddApp extends React.Component {
  state = {name: ''};
  render () {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({name: e.target.value})}
        />
        <button
          onClick={e => this.props.onClick(this.state.name)}
        >
          + APP
        </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddApp);
