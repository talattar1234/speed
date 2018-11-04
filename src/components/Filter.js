import React from 'react';
import { connect } from 'react-redux';
import {getFilterByDescription} from '../selectors/filterSelector';
import {setFilterByDescription} from '../logics/filterLogic';

class Filter extends React.Component {

    onFilterTextChange = (e) => {
        const newFilterText = e.target.value;
        setFilterByDescription({filterByDescription:newFilterText})  
    }

    render(){
        return (
            <div className="filter" >
                <div className="filter__title">Filter by description </div>
                <div className="filter__value">
                    <input onChange={this.onFilterTextChange} value={this.props.filterByDescription}  type="text" />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        filterByDescription: getFilterByDescription(state)
    };
  };

export default connect(mapStateToProps)(Filter);