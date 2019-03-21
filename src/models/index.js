import request from '../utils/request'
export default {

    namespace: 'index',
  
    state: {
        jsonData:{},
        url:"",
        headers:{},
        params:{},
        host:"",
        path:"/",
        method:"POST"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {
        const {url} = payload
        yield call(request,url,{})
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      updateJson(state, {jsonData}){
        console.log(jsonData)
        return { ...state,  jsonData };
      },
      updateMethod(state,{payload}){
        const {method} = payload
        return {...state,method}
      },
      updateHost(state,{payload}){
        console.log(payload)
        const {host} = payload
        return {...state,host}
      },
      updatePath(state,{payload}){
        const {path} = payload
        return {...state,path}
      }
    },
  
  };
  