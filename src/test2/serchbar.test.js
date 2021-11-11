import React from "react";
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import SearchBar from "../search";

afterEach(cleanup);

it("should render a search bar", ()=>{
    const { getByTestId } = render(<SearchBar />);

    const button = getByTestId("searchbar");
    expect(button).toBeEnabled();
})