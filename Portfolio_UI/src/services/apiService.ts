import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:2001";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  message: string;
  data: Record<string, any>;
  error?: boolean;
}

export const sendContactMessage = async (
  payload: ContactPayload
): Promise<ContactResponse> => {
  try {
    const response = await axios.post<ContactResponse>(
      `${API_BASE_URL}/contact`,
      payload
    );
    return response.data;
  } catch (error) {
    let errMessage = "An unexpected error occurred.";
    let errData = {};

    // Manual type check for axios error structure
    if (error && typeof error === "object" && "response" in error) {
      const axiosError = error as {
        response?: { data?: any; status?: number };
      };
      if (axiosError.response) {
        errMessage =
          (axiosError.response.data as any)?.message || "Something went wrong";
        errData = axiosError.response.data || {};
      } else if ("request" in error) {
        errMessage = "Network error or server unavailable.";
      }
    }

    return {
      error: true,
      message: errMessage,
      data: errData,
    };
  }
};
