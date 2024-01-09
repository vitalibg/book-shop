const apiFetchNewBooks = async () => {
  const response = await fetch(`https://api.itbook.store/1.0/new`);
  const data = await response.json();
  return data.books;
};

export default apiFetchNewBooks;
