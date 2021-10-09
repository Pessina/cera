import axios from "axios";

export const schedule = async () => {
  try {
    const { data } = await axios.get(
      "https://ceracare.github.io/bookSlot.json"
    );
    return data;
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};
