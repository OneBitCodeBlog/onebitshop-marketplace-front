import api from "./api";

const categoryService = {
  getCategories: async () => {
    const res = await api.get("/categories");

    return res;
  },
};

export default categoryService;
