import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("receive a new user and show it on a list", async () => {
  // render app.
  render(<App />);

  // find 2 inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate typing name
  await user.click(nameInput);
  await user.keyboard("kabi");

  // simulate typing email
  await user.click(emailInput);
  await user.keyboard("kabi@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  // screen.debug(); -> console logs the html based on this function.

  const name = screen.getByRole("cell", { name: "kabi" });
  const email = screen.getByRole("cell", { name: "kabi@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
