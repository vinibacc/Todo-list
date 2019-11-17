import { combineReducers } from "redux";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  todo: () => ({
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
      },
    ]
  })
});

export default reducers;
