const defultState = {
  list: [],
};

const reducer = (state = defultState, action) => {
  action = action || { type: "" };
  switch (action.type) {
    case "pushData":
      return {
        ...state,
        list: [...state.list, action.task],
      };
    case "del":
    let arr =state.list.filter((item,index)=>{
        return index!==action.index
    })
      return {
        ...state,
        list: [...arr],
      };
    default:
      return state;
  }
};

export default reducer;
