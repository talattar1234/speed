import React from 'react';
import { connect } from 'react-redux';
import ENUM from '../enum';
import {getSortType} from '../selectors/sortSelector'
import {setSortType} from '../logics/sortLogic';
class Sort extends React.Component {
    onSortByChange = (e) => {
        const type = e.target.value;
        setSortType({type})
    }
    render() {
        return (
            <div>
                sort by
                <select onChange={this.onSortByChange} value={this.props.sortType}>

                    <option value={ENUM.SortType.CREATED_BY_NEWEST_FIRST}>CreatedBy - Newset First</option>
                    <option value={ENUM.SortType.CREATED_BY_OLDEST_FIRST}>CreatedBy - Oldest First</option>
                </select>

            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        sortType: getSortType(state)
    };
  };
  export default connect(mapStateToProps)(Sort);
  