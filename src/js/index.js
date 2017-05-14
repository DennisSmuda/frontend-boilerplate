import styles from '../css/main.css';

/**
 * Imports
 */
import Barba from 'barba.js';

// Transitions
import FadeTransition from './transitions/fade';

/**
 * Setup Transition
 */
Barba.Pjax.getTransition = () => {
  return FadeTransition;
};

Barba.Pjax.start();
