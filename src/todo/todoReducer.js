const INITIAL_STATE = {
  description: "ler livro",
  list: [
    {
      _id: 1,
      description: "Pagar fatura do cartão",
      done: true
    },
    {
      _id: 2,
      description: "Reunião",
      done: true
    },
    {
      _id: 3,
      description: "tarefa opa",
      done: true
    }
  ]
};

export default function TodoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DESCRITION_CHANGE":
      return { ...state, description: action.payload };

    default:
      return state;
  }
}

export const Creators = {};
