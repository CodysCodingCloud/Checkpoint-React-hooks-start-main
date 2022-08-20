// You do not need to edit this file!

// The regenerator runtime allows us to use async await, even in browsers that
// do not support it. For more details, see:
// https://babeljs.io/docs/en/babel-polyfill#docsNav, and
// https://github.com/tc39/ecmascript-asyncawait
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root';

const App = () => {
  return <Root />;
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
