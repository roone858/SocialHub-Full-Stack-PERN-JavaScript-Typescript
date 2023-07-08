const { createStore } = require("redux");

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { value: state.value + 1 };
    case "counter/decrement":
      return { value: state.value - 1 };

    default:
      return state;
  }
}
const store = createStore(counterReducer);
store.subscribe(()=> console.log("state = " +JSON.stringify (store.getState())))

store.dispatch({ type: "counter/increment" });
store.dispatch({ type: "counter/increment" });
store.dispatch({ type: "counter/increment" });
store.dispatch({ type: "counter/decrement" });
