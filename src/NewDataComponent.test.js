import { render, screen, getByText, waitFor, act, fireEvent} from "@testing-library/react";
import LocationCard from "./LocationCard";
import {signInToTestUser, userSetState} from "./utilities/firebase.js";

it("LocationCard shows the accurate data when data exists",async () => {
  act (() => render(<LocationCard address="2233 Tech Dr, Evanston, IL 60208, USA" />));

  const counter = await waitFor(() => 
    expect(screen.getByText("Mudd Library")).toBeTruthy())
});

const makeRandomAddress = () => {
    var streetNumber = Math.floor(Math.random() * 2500);
    var streetName = ['Sheridan Rd', 'University Pl', 'Ridge Ave', 'Library Pl', 'Noyes St', 'Tech Dr', 'Campus Dr'][Math.floor(Math.random() * 6)];
    var cityZipCountry = 'Evanston, IL 60201, USA';
    return streetNumber.toString() + " " + streetName + ", " + cityZipCountry;
}

it("UploadNewDataComponent uploads the data and displays it on LocationCard",async () => {

    var randomAddress = makeRandomAddress();
    await act (async () => {
        try {
            await signInToTestUser();
        } catch (err){
            console.log(err);
        }

        console.log(userSetState());

        const button = screen.queryByTestId('submit-data-button')
        const nameTextField = screen.queryByTestId ('name-textfield')
        const descriptionTextField = screen.queryByTestId ('description-textfield')

        button.click()
    
        const counter = await waitFor(() => 
            expect(screen.getByText("Mudd Library")).toBeTruthy())

        render(<LocationCard address={randomAddress}/>)});

  });
