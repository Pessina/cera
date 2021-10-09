import axios from "axios";

export const getCarers = async () => {
  try {
    const {
      data: { carers },
    } = await axios.get("https://ceracare.github.io/carers.json");
    return carers;
  } catch (e) {
    console.error(e);
    return [];
  }
};
