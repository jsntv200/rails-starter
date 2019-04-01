// By default, this pack is loaded for server-side rendering.
import ReactRailsUJS from 'react_ujs';

// Support component names relative to this directory:
let componentRequireContext = require.context('components', true);
ReactRailsUJS.useContext(componentRequireContext);
