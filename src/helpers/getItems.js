export const getItems = (length = 300) => {
  const items = [];
  for (let i = 0; i < length; i += 1) {
    items.push({
      id: i + 1,
      value: `Элемент ${ i + 1 }`,
    });
  }
  return items;
};
