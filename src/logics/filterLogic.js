import {store} from '../index';

import {setFilterByDescription as setFilterByDescriptionAction } from "../actions/filterAction"


export const setFilterByDescription = ({filterByDescription}) => {

   store.dispatch(setFilterByDescriptionAction({filterByDescription: filterByDescription}));
}