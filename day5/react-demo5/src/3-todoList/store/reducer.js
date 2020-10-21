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
    case "getData":
      console.log('数据请求成功');
      return {
        ...state,
        list:action.arr
      };
      // return state;
    default:
      console.log(1);
      return state;
  }
};

export default reducer;
