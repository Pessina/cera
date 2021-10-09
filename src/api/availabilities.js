import axios from "axios";

export const getAvailabilities = async () => {
  try {
    const {
      data: { UTCAvailableSlots },
    } = await axios.get("https://ceracare.github.io/availableSlots.json");
    return UTCAvailableSlots;
  } catch (e) {
    console.error(e);
    return [];
  }
};
