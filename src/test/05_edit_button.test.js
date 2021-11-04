import React from "react";
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import LocationCard from '../LocationCard';

afterEach(cleanup);

it(' render a submit button ', () => {
    const { getByTestId } = render(<LocationCard address="2233 Tech Dr, Evanston, IL 60208, USA"/>);
    const button = getByTestId('submitButton');

    act(() => {
        fireEvent.click(getByTestId('editButton'));
    })
    
    expect(button).toBeEnabled();
})




