const viewTemplate = {
  make(name, uName, objName) {
    return `// Imports
import { BaseView } from 'barba.js';
import $ from 'jquery';

/**
 * ${uName} Page BarbaView
 */
const ${objName} = BaseView.extend({
  namespace: '${name}',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
      console.log("Enter ${uName} View");
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
    `;
  }
}

module.exports = viewTemplate;