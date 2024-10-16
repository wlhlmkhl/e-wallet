import { createSlice } from "@reduxjs/toolkit";
//Kortutgivare, card number, cardholder, expire month, expire year, CCV.
const initialState = {
  cards: [
    {
      id: 1,
      cardholder: "Pelle Jönsson",
      cardnumber: "4545 4545 4545 4545",
      expireMonth: "11",
      expireYear: "25",
      cvc: "212",
      vendor: "visa",
      active: true,
    },
    {
      id: 2,
      cardholder: "Tilde Mattsson",
      cardnumber: "4545 4545 4545 4545",
      expireMonth: "11",
      expireYear: "25",
      cvc: "212",
      vendor: "visa",
      active: false,
    },
  ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    logCards: (state) => {
      console.log(state.cards);
    },
    addCard: (state) => {
      console.log("add card...");
    },
  },
});

export const { logCards } = walletSlice.actions;
export default walletSlice.reducer;
