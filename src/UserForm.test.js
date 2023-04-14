import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows 2 inputs and 1 button", () => {
  // render the component.
  render(<UserForm />);

  // manipulate the component or find an element in it.
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion - make sure the comp is doing what we expect it to do.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // mock function as we are not passing onUserAdd from App.
  // we are testing UserForm in isolation.
  const mock = jest.fn();

  // render comp
  render(<UserForm onUserAdd={mock} />);

  // find 2 inputs
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
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

  // assertion to make sure "onUserAdd" gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "kabi", email: "kabi@gmail.com" });
});

test("empties the 2 inputs when the form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("kabi");
  await user.click(emailInput);
  await user.keyboard("kabi@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
