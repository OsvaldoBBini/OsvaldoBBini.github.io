import { createContext, Dispatch, SetStateAction } from 'react'

interface IPageContextValues {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

export const PageContext = createContext<IPageContextValues>({
  page: '/',
  setPage: () => {},
});
