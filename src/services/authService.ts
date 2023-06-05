import api from "./api";

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const authService = {
  register: async (params: RegisterParams) => {
    const res = await api.post("/register", params);

    return res;
  },
};

export default authService;
