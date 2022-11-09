import { combineReducers } from 'redux'
import { calendarMonthSwitcherReducer } from './calendarMonthSwitcher';
import { eventFormModalReducer } from './eventFormModal';

export default combineReducers({
  calendarMonthSwitcherReducer,
  eventFormModalReducer,
});