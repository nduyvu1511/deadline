import { createSlice } from '@reduxjs/toolkit';

interface Locale {
    currentLanguage: 'vni' | 'eng';
}

const initialState: Locale = {
    currentLanguage: 'eng',
};

const LocaleSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        switchToVietnamese: (state) => {
            state.currentLanguage = 'vni';
        },
        switchToEnglish: (state) => {
            state.currentLanguage = 'eng';
        },
    },
});

export default LocaleSlice.reducer;

export const { switchToVietnamese, switchToEnglish } = LocaleSlice.actions;
