import { api } from "@/api/api";

export const getGuestAuthentication = async () => {
  try {
    const response = await api.get(
      "/authentication/guest_session/new?api_key=3b567445aa3a8ec4c4122378cfdc30bc"
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
