import {store} from '../index';

import {setSortType as setSortTypeAction } from "../actions/sortAction"


export const setSortType = ({type}) => {
   store.dispatch(setSortTypeAction({type}));
}