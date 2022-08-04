const reducer = (state, action) => {
  if (action.type === "INIT_VALUES") {
    const newState = action.payload;
    return {
      ...state,
      amount: newState.price.toFixed(2),
      items: newState.items,
    };
  }

  if (action.type === "REMOVE_ONE_ITEM") {
    const id = action.payload;
    const array = state.items.filter((item) => item.id !== id);
    let newPrice = 0;

    array.forEach((item) => {
      newPrice += item.price * item.amount;
    });

    return {
      ...state,
      items: array,
      amount: newPrice.toFixed(2),
    };
  }

  if (action.type === "CLEAR_ITEMS") {
    return {
      ...state,
      items: [],
      amount: 0,
    };
  }

  if (action.type === "ACTION_ITEM") {
    const id = action.payload.id;
    const actionItem = action.payload.action;
    let count = 0;
    let array = [];
    let newPrice = 0;

    if (actionItem === "add") {
      state.items.forEach((item) => {
        if (item.id === id) {
          item.amount++;
          count = item.amount;
        }
      });
    } else if (actionItem === "substract") {
      state.items.forEach((item) => {
        if (item.id === id) {
          item.amount--;
          count = item.amount;
        }
      });
    }

    if (count <= 0) {
      array = state.items.filter((item) => item.id !== id);
      newPrice = 0;
      array.forEach((item) => {
        newPrice += item.price * item.amount;
      });

      return {
        ...state,
        items: array,
        amount: newPrice.toFixed(2),
      };
    } else {
      newPrice = 0;
      state.items.forEach((item) => {
        newPrice += item.price * item.amount;
      });
      return {
        ...state,
        amount: newPrice.toFixed(2),
      };
    }
  }
};

export default reducer;
