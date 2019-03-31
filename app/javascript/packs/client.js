/* eslint no-console:0 */
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import React from 'react';
import ReactDOM from 'react-dom';
import ReactOnRails from 'react-on-rails';

import { Hello } from '../modules/hello';

// Components that use hooks need to be wrapped in a function
// https://github.com/shakacode/react_on_rails/issues/1198#issuecomment-475689587
ReactOnRails.register({
  Hello: (props) => <Hello {...props} />,
});
