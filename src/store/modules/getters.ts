import types from "@/model/type";

export default {
  getGuest: (state: { guest: types["guestType"] }) => {
    return state.guest;
  },
};
