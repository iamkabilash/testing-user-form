import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render 1 row per user", () => {
  // render the component.
  const users = [
    { name: "kabi", email: "kabi@gmail.com" },
    { name: "shaaru", email: "shaaru@gmail.com" },
  ];

  render(<UserList users={users} />);

  // - destructure container to use querySelector
  // const { container } = render(<UserList users={users} />);

  // find all rows in table.
  // screen.logTestingPlaygroundURL();

  // approach #0 -> not recommended.
  // const rows = screen.getAllByRole("row"); => counts the <th> row also.

  // approach #1: not so great, coz we need to add a attribute to the html element.
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // approach #2: use querySelector -> need to destructure container in render.
  // const rows = container.querySelectorAll("table tbody tr");

  // assertion: correct number of rows in the table.
  expect(rows).toHaveLength(2);
});

test("render email and name of each user", () => {
  // render the component.
  const users = [
    { name: "kabi", email: "kabi@gmail.com" },
    { name: "shaaru", email: "shaaru@gmail.com" },
  ];
  render(<UserList users={users} />);

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
