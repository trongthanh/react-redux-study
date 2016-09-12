/**
 * Store
 */

import { counter } from './counter';
import { createStore } from 'redux';

export const store = createStore(counter);

