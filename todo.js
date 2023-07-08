const { createStore } = require("redux");

function TodoReducer(state = [], action) {
  switch (action.type) {
    case "todos/todoAdded":
      return [...state, action.payload];
    case "todos/todoRemove":
      return state.filter((todo) => todo.text !== action.payload.text);
    default:
      return state;
  }
}

const store = createStore(TodoReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "todos/todoAdded",
  payload: { text: "task one", done: false },
});
store.dispatch({
  type: "todos/todoAdded",
  payload: { text: "task tow", done: false },
});

store.dispatch({
  type: "todos/todoAdded",
  payload: { text: "task three", done: false },
});
store.dispatch({
  type: "todos/todoRemove",
  payload: { text: "task three", done: false },
});
