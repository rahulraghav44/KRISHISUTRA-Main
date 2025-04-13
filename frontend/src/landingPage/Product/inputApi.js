import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const fetchPredictions = async (district, season) => {
  try {
    const response = await axios.get(`${API_URL}/predict`, {
      params: { district, season },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
