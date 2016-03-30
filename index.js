import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';
import routes from './routes';

if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet');
  ReactDOM.render(<Router history={browserHistory} routes={routes} />, outlet);
}

// This is our 'server' rendering
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  // poop out the contents of the page
  // keep for now
  
  // let content = {
  //   __html: ReactDOMServer.renderToString(<Router history={history}>{routes}</Router>)
  // }

  // This is from the webpack plugin
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    // entire page rendering
    let html = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />)
    callback(null, '<!DOCTYPE html>' + html);
  });
};
