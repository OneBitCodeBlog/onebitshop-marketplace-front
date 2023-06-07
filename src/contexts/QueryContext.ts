import React from "react";

interface QueryType {
  filters: string[];
  addFilters: (filter: string) => void;
}

export const QueryContext = React.createContext<QueryType>({
  filters: [],
  addFilters: () => {},
});
