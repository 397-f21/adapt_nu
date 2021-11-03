import { render, screen, getByText} from "@testing-library/react";
import Search from './search'
import * as admin from 'firebase-admin';

it("LocationCard renders with correct data", () => {
  render(<LocationCard name="test name" desc="test desc" />);
  expect(screen.getByText("test name")).toBeTruthy()
  expect(screen.getByText("test desc")).toBeTruthy()
});

it("should throw error if Search is called with a typo", () => {
  //render(<Search )
});
