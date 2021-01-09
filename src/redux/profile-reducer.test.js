import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";
import {expect} from "@jest/globals";


let state = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: 3},
        {id: 2, message: "Hi, im fine", likesCount: 1},
    ]
}



test('length must be incremented', () => {
    // 1 - Test Data
    let action = addPostCreator("Test message");
    // 2 - Action
    let newState = profileReducer(state, action);
    // 3 - Expectation
    expect(newState.postsData.length).toBe(3);
});


test('message of new post should be "Test message"', () => {
    // 1 - Test Data
    let action = addPostCreator("Test message");
    // 2 - Action
    let newState = profileReducer(state, action);
    // 3 - Expectation
    expect(newState.postsData[2].message).toBe("Test message");
});


test('Length of postsData after deleting should be decremented', () => {
    // 1 - Test Data
    let action = deletePost(1);
    // 2 - Action
    let newState = profileReducer(state, action);
    // 3 - Expectation
    expect(newState.postsData.length).toBe(1);
});

