const apiSearchBook = async (searchValue: string) => {
  const response = await fetch(`https://api.itbook.store/1.0/search/${searchValue}`);
  const data = await response.json();
  return data.books;
};

export default apiSearchBook;
