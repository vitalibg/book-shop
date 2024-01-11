const apiFetchBook = async (isbn: string) => {
  const response = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
  return await response.json();
};

export default apiFetchBook;
