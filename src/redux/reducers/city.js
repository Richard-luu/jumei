// 这是 获取城市

let defaultState = {
  curCity: ''
}

function city (state = defaultState, action) {
  switch (action.type) {
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

export default city;

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
