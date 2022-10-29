import types from "@/model/type";

export default {
  setGuest: (
    state: { guest: types["guestType"] },
    payload: types["guestType"]
  ) => {
    state.guest = payload;
  },
};
