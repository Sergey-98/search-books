import axios from 'axios';

const _apiKey = 'AIzaSyDFzxMPmVWRfO1L6ug8mRuzlLLHeL3b67Y';
const _url = 'https://www.googleapis.com/books/v1/volumes';
const maxResult = 30;

export async function getBooks(searchValue: string, sorting: string, page: number, filter: string) {
  const categoryQuery = filter === 'all' ? '' : `+subject:${filter}`;
  const intitleQuery = `+intitle:${searchValue}`;
  console.log('---', searchValue, sorting, page, filter);
  try {
    const response = await fetch(
      `${_url}?q=${intitleQuery}${categoryQuery}:&orderBy=${sorting}&startIndex=${
        page * maxResult
      }&maxResults=${maxResult}&key=${_apiKey}`
    );
    if (!response.ok) {
      alert('Error');
    }
    const responseData = await response.json();
    // console.log('responce', responseData);
    return responseData;
  } catch {
    alert('Error');
  }
  // return await axios.get(
  //   `${_url}?q=${intitleQuery}${categoryQuery}:&orderBy=${sorting}&startIndex=${
  //     page * maxResult
  //   }&maxResults=${maxResult}&key=${_apiKey}`
  // );
}

export async function getOneBook(id: string) {
  return await axios.get(`${_url}/${id}`);
}
