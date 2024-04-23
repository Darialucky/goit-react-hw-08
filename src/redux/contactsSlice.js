import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
  { id: 0, name: "John Doe", number: "0501112233" },
  { id: 1, name: "Jane Smith", number: "0973322114" },
  { id: 2, name: "Mary Johnson", number: "0445566778" },
  { id: 3, name: "Robert Brown", number: "0679876543" },
  { id: 4, name: "Emily Davis", number: "0931122334" },
];
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsInitialState,
  },
  reducers: {
    addContact(state, action) {
      const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newContact);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
