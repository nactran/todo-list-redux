/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action 创建函数
 */

export function addTodo(text: string): { type: string; text: string } {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index: number): { type: string; index: number } {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: string): { type: string; filter: string } {
  return { type: SET_VISIBILITY_FILTER, filter };
}
