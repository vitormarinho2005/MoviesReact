import axios from "axios";

const API_URL = "https://681bbf3b17018fe5057c9ed3.mockapi.io/usuarios";

export const loginRequest = async (username, password) => {
  if (!username || !password) {
    return { success: false, message: "Username and password are required" };
  }

  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    // Verifica se o nome de usuário e senha estão corretos
    const foundUser = users.find(
      (u) => u.name === username && u.password === password
    );

    if (foundUser) {
      return { success: true, user: foundUser };
    } else {
      return { success: false, message: "Nome de usuário ou senha inválidos!" };
    }
  } catch (error) {
    // Verifica se o erro é um erro relacionado à requisição HTTP
    if (axios.isAxiosError(error)) {
      console.error("Erro de autenticação: ", error.response?.data || error.message);
      return { success: false, message: "Ocorreu um erro ao conectar ao servidor!" };
    } else {
      console.error("Erro desconhecido de autenticação: ", error);
      return { success: false, message: "Ocorreu um erro desconhecido durante a autenticação!" };
    }
  }
};
