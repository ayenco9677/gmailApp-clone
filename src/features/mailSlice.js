import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessgeIsOpen: false,
        selectedMail: null,
    },
    reducers: {
        openSendMessage: state => {
            state.sendMessgeIsOpen = true;
        },
        closeSendMessage: state => {
            state.sendMessgeIsOpen = false;
        },
        selectMail: (state, action) => {
            state.selectedMail = action.payload
        }
    },
});

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessgeIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;