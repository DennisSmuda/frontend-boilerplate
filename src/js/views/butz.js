// Imports
import { BaseView } from 'barba.js';
import $ from 'jquery';

/**
 * Butz Page BarbaView
 */
const ButzView = BaseView.extend({
  namespace: 'butz',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
      console.log("Enter Butz View");
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
});

export default ButzView;
    