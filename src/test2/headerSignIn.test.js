import { render, screen, getByText, cleanup, act } from "@testing-library/react";
import { Banner } from "../App.js";
import { useUserState } from "../utilities/firebase.js";

afterEach(cleanup);
it("Sign In button when user is not signed in", () => {
  jest.mock("../utilities/firebase.js", () => () => ({
    useUserState: () => false,
  }));
  render(<Banner />);
  expect(screen.getByText("Sign In")).toBeTruthy();
});

it("Tells user that they're signed in if signed in", () => {
  act(() => {
    jest.mock("./utilities/firebase.js", () => () => ({
        useUserState: () => true,
      }));
  })
  render(<Banner />);
  expect(screen.getByText("You're signed in!")).toBeTruthy();
});
