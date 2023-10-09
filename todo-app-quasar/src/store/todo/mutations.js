/*
export function someMutation (state) {
}
*/

export const addTodo = (state, value) => {
  state.todoListData.unshift(value);
};

export const handleDeleteItem = (state, value) => {
  state.todoListData = state.todoListData.filter((item) => {
    return item.id != value.id;
  });
};

export const handleDeleteAll = (state) => {
  state.todoListData = [];
};

export const handleToggleItem = (state, id) => {
  // const item = state.todoListData.map((item) =>
  //   item.id === id ? { ...item, checked: !item.checked } : item
  // );

  const item = state.todoListData.find((item) => {
    return item.id === id;
  });
  if (item) {
    item.checked = !item.checked;
  }
  console.log("🚀 ~ file: mutations.js:26 ~ handleToggleItem ~ item:", item);
};

export const sortTask = (state, item) => {
  switch (item.value) {
    case "name":
      state.todoListData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "ceklis":
      state.todoListData.sort((a, b) => a.checked - b.checked);
      break;
    default:
      state.todoListData;
      break;
  }
};
