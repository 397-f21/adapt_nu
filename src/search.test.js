import { render, screen, getByText} from "@testing-library/react";
import Search from './search'

it("Search shows up", () => {
  render(<Search name="test name" desc="test desc" />);
  expect(screen.getByText("test name")).toBeTruthy()
  expect(screen.getByText("test desc")).toBeTruthy()
});
