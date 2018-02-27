import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { startApp } from '../actions/app';

const mapStateToProps = state => ({
  apps: state.apps
});

const mapDispatchToProps = dispatch => ({
  onAppStart: (id) => dispatch(startApp(id))
});

const AppList = ({apps, onAppStart}) => (
  <div>
    {apps.map(app => (
      <App
        key={app.id}
        name={app.name || `<Unnamed APP ${app.id}>`}
        status={app.status}
        onStart={() => onAppStart(app.id)}
      />
    ))}
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppList);
