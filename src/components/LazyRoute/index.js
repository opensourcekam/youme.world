// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { Module } from 'react-router-server';
// import { connect } from 'react-redux';
// import { compose } from 'recompose';


// const mapStateToProps = () => ({
// });

// const enhance = compose(connect(mapStateToProps));

// const LazyRoute = enhance(({
//   authRequired, location, key, moduleLoader, ...props
// }) => (
//   <Route
//     {...props}
//     render={matchProps => (
// 			// (authRequired && !session.accessToken().get())
// 			(authRequired)
// 				? <Redirect to={{ pathname: '/register', state: { from: location } }} />
// 				: <Module key={key} module={moduleLoader}>{module => (module ? <module.default {...matchProps} /> : null)}</Module>
// 		)}
//   />
// ));

// export default LazyRoute;
