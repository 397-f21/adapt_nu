import React from "react";
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import {SignInButton} from "../LocationCard";

afterEach(cleanup);

it("should render a sign in button", ()=>{
    const { getByTestId } = render(<SignInButton />);

    const button = getByTestId("signinbutton");
    expect(button).toBeEnabled();
})