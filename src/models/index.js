
export default {

    namespace: 'index',
  
    state: {
        jsonData:{},
        url:"",
        headers:{},
        params:{},
        method:"GET"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      updateJson(state, {jsonData}){
        console.log(jsonData)
        return { ...state,  jsonData };
      }
    },
  
  };
  