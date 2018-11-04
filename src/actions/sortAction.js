export const setSortType = ({type}) => {
    return {
        type: "SET_SORT_TYPE",
        payload:{
            type
        }
    }
  }