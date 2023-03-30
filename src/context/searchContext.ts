import { createContext, useContext } from "react";

interface SearchContexType {
    search: string
    setSearch: (s: string) => void,
  };

export const SearchContext = createContext<SearchContexType | null>(null)

export const useSearchContext = () => useContext(SearchContext)