import * as actionType from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) =>({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})

export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionType.SEARCH_BLURS
});

export const mouseEnter = () =>({
  type: actionType.MOUSE_ENTER
});

export const mouserLeave = () =>({
  type: actionType.MOUSE_LEAVE
})

export const changePage = (page) =>({
  type: actionType.CHANGE_PAGE,
  page
})

export const getList = () =>{
  return ((dispatch) =>{
    axios.get('/api/headerList.json').then((res) =>{
      const action = changeList(res.data.data);
      dispatch(action);
    }).catch(() =>{
      console.log('error');
    })
  })
}
