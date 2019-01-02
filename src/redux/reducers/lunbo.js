// 这是 轮播
let defaultState = {
  data: ['pic-1', 'pic-2', 'pic-3', 'pic-4'],
  imgHeight: 210
}
function lunbo (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          action.name
        ]
      })
      // let state = JSON.parse(JSON.stringify(state));
      // state.list.push(action.name);
      // return state;
    case 'DELETE_TODO':
      let newList = [...state.todos];
      newList.splice(action.index, 1);
      return Object.assign({}, state, {
        todos: newList
      })
    case 'SET_CURCITY':
      return Object.assign({}, state, {
        city: Object.assign({}, state.city, {
          curCity: action.name
        })
      })
    // default
    default:
      return state;
  }
}

export default lunbo;

    /**
     * 根据百度地图地位的api。获取当前的城市
     */
    // getCityName () {
    //   /* eslint-disable */
    //   let myCity = new BMap.LocalCity();
    //   myCity.get((result) => {
    //     this.curCity = result.name;
    //   })
    // }
