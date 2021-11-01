import { render, screen, getByText} from "@testing-library/react";
import LocationCard from "./LocationCard";

it("LocationCard renders with correct data", () => {
  render(<LocationCard name="test name" desc="test desc" />);
  expect(screen.getByText("test name")).toBeTruthy()
  expect(screen.getByText("test desc")).toBeTruthy()
});
