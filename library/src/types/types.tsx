export type State = {
  searchValue?: string;
  page?: number;
  categories?: string;
  sorting?: string;
  searchBooksList?: BooksInfoType[];
  totalItems?: number;
  bookData?: BookInfo;
  isLoading?: boolean;
};

export type SelectProps = {
  propsValues: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  title: string;
};

export type InputProps = {
  onClickUpdate?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClear?: () => void;
  onClickSearch?: () => void;
  onKeyDownEnter?: (event: React.KeyboardEvent) => void;
  placeholder: string;
};

type ImgLinks = {
  thumbnail: string;
};

export type BookInfo = {
  imageLinks?: ImgLinks;
  title?: string;
  categories?: string[];
  authors?: string[];
  description?: string;
};

export type BooksInfoType = {
  id: string;
  volumeInfo: BookInfo;
};

export type BookInfoType = {
  volumeInfo: BookInfo;
};

export type PropsMainCard = {
  bookInfo: BookInfo;
  onOpenBook: () => void;
  key?: number;
};
