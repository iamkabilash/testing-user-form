import { render, screen } from "@testing-library/react";

test("test if the below elemets are present in page", () => {
  render(<Component />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "testbox",
    "listitem",
    "list",
  ];

  roles.forEach((role) => {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  });
});

// if 2 elements have same roles, #1: we can check using the innerText (name property).
// <button>Submit</button>

test("selecting by accessible name", () => {
  render(<Component />);

  // can use below both, but non-case sensitive is preferred, so we use regex selector.
  // const submitButton = screen.getByRole("button", { name: "Submit" });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(submitButton).toBeInTheDocument();
});

// if 2 elements have same roles, #2: we can check using the aria-label property.
// maily used if there is no text inside, and there is only an svg or img inside.
// <button aria-label="submit"><svg></svg></button>
test("selecting by accessible name", () => {
  render(<Component />);

  // can use below both, but non-case sensitive is preferred, so we use regex selector.
  // const submitButton = screen.getByRole("button", { name: "Submit" });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  expect(submitButton).toBeInTheDocument();
});
