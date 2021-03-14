import {createSelector} from "reselect";

export const getDialogsSelector = (state) => {
    console.log("dialogs selector did something")
    return state.dialogsPage;
}

export const getDialogs = createSelector(getDialogsSelector, dialog => dialog)
