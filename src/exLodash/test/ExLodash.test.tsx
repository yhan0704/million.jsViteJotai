import { render, waitFor } from "@testing-library/react";
import ExLodash from "../ExLodash";
import userEvent from "@testing-library/user-event";

jest.useFakeTimers();

describe("Counter Component", () => {
  it("should show filtered options after 0.5 seconds of typing", async () => {
    const { getByPlaceholderText, getByText } = render(<ExLodash />);
    const input = getByPlaceholderText("Favorites");

    // Type 'The' into the input
    userEvent.type(input, "hi");

    jest.advanceTimersByTime(500);

    // Wait for the debounce to complete
    await waitFor(() => {
      expect(getByText("The-Godfather-Redemption-hi-mango")).toBeTruthy();
      expect(getByText("The-Godfather-Redemption-hi-mango")).toBeTruthy();
    });
  });
});
