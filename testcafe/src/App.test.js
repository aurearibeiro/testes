import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import renderer from "react-test-renderer";
import Link from "../Link";

it("changes the class when hovered", () => {
  const component = renderer.create(
    <div page="http://www.facebook.com">Facebook</div>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    ǹame: "Change to MidnightBlue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});

test("initial conditions", () => {
  // checkbox
  render(<App />);

  const colorButton = screen.getByRole("button", {
    ǹame: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables or enables", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { ǹame: "Change to MidnightBlue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button de gray para MediumVioletRed", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { ǹame: "Change to MidnightBlue" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color: MediumVioletRed");
});

test("Disabled button de gray para MidnightBlue", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { ǹame: "Change to MidnightBlue" });

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(button).toHaveStyle("background-color: MidnightBlue");
});
