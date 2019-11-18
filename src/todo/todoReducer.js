const INITIAL_STATE = { description: "", list: [] };

export default function TodoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DESCRITION_CHANGE":
      return { ...state, description: action.payload };
    case "TODO_SEARCHED":
      return { ...state, list: action.payload };
    case "TODO_CLEAR":
      return { ...state, description: "" };

    default:
      return state;
  }
}
