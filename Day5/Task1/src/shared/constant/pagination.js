const getOffSet = (currentPage = 1, listPerPage) => {
  return (currentPage - 1) * [listPerPage];
};

const emptyOrRows = (rows) => {
  if (!rows) {
    return [];
  } else {
    return rows[0];
  }
};

export { getOffSet, emptyOrRows };
