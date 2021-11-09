import { render, screen, getByText, waitFor, act, fireEvent} from "@testing-library/react";
import LocationCard from "./LocationCard";
import {signInWithCredentials} from "./utilities/firebase.js";

// it("LocationCard shows the accurate data when data exists",async () => {
//   act (() => render(<LocationCard address="2233 Tech Dr, Evanston, IL 60208, USA" />));

//   const counter = await waitFor(() => 
//     expect(screen.getByText("Mudd Library")).toBeTruthy())
// });

const makeRandomAddress = () => {
    var streetNumber = Math.floor(Math.random() * 2500);
    var streetName = ['Sheridan Rd', 'University Pl', 'Ridge Ave', 'Library Pl', 'Noyes St', 'Tech Dr', 'Campus Dr'][Math.floor(Math.random() * 6)];
    var cityZipCountry = 'Evanston, IL 60201, USA';
    return streetNumber.toString() + " " + streetName + ", " + cityZipCountry;
}

it("UploadNewDataComponent uploads the data and displays it on LocationCard",async () => {

    var randomAddress = makeRandomAddress();
    await act (async () => {
            await signInWithCredentials("testuser@test.com", "123456");
            
            await waitFor(() => 
                expect( screen.getByTestId('submit-data-button')).toBeTruthy())

            const button = screen.getByTestId('submit-data-button')
            const nameTextField = screen.getByTestId ('name-textfield')
            const descriptionTextField = screen.getByTestId ('description-textfield')

            console.log(button, nameTextField, descriptionTextField);
            fireEvent.change(nameTextField, { target: { value: 'Test Location' } })
            fireEvent.change(descriptionTextField, { target: { value: 'This is The Test Location' } })

            button.click()
        
            const counter = await waitFor(() => 
                expect(screen.getByText("Mudd Library")).toBeTruthy())

            render(<LocationCard address={randomAddress}/>)
        });

  });
