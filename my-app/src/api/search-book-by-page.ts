const apiSearchBooksByPage = async (searchValue: string, page: string) => {
  const response = await fetch(`https://api.itbook.store/1.0/search/${searchValue}/${page}`);
  const data = await response.json();
  return data.books;
};

export default apiSearchBooksByPage;
