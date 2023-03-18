export type State = {
  searchValue?: string;
  categories?: string;
  sorting?: string;
};

export type HeaderProps = {
  propsValues: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  title: string;
};
