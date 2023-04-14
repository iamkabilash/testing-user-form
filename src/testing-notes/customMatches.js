/*
<div>
    <button>Reset</button>
    <form aria-label="form">
        <button>Save</button>
        <button>Cancel</button>
    </form>
</div>
*/

const form = screen.getByRole("form");

// option #1
const buttons = within(form).getAllByRole("button");
expect(buttons).toHaveLength(2);

// option #2
expect(form).toContainRole("button", 2);
