import api from "./api";

const searchService = {
  getSearched: async (name: string) => {
    const res = await api.get(`/products/search?name=${name}`);

    return res;
  },
};

export default searchService;
