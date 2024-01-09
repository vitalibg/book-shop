const apiFetchTotalBooks = async () => {
  const response = await fetch(`https://api.itbook.store/1.0/new`);
  const data = await response.json();
  return data.total;
};

export default apiFetchTotalBooks;
