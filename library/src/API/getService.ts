import axios from 'axios';
import { _apiKey, _url, maxResult } from 'constants/constants';

export async function getBooks(searchValue: string, sorting: string, page: number, filter: string) {
  const categoryQuery = filter === 'all' ? '' : `+subject:${filter}`;
  const intitleQuery = `+intitle:${searchValue}`;
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
    return responseData;
  } catch {
    alert('Error');
  }
}

export async function getOneBook(id: string) {
  return await axios.get(`${_url}/${id}`);
}
