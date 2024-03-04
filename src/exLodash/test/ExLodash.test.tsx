import { render, waitFor } from "@testing-library/react";
import ExLodash from "../ExLodash";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("Counter Component", () => {
  it("should show filtered options after 0.5 seconds of typing", async () => {
    const { getByPlaceholderText, queryByText } = render(<ExLodash />);
    const input = getByPlaceholderText("Favorites");

    // Type 'The' into the input
    userEvent.type(input, "bye");

    jest.advanceTimersByTime(500);

    // Wait for the debounce to complete
    await waitFor(() => {
      expect(
        queryByText("The-Godfather-Redemption-hi-banana")
      ).not.toBeInTheDocument();
      expect(
        queryByText("The-Godfather-Redemption-hi-pineapple")
      ).not.toBeInTheDocument();
    });
  });
});
