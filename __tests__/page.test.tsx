import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

jest.mock("../src/utils/flagsmith", () => {
  return {
    getEnvironmentFlags: jest.fn(() =>
      Promise.resolve({
        isFeatureEnabled: () => {
          return true;
        },
      }),
    ),
  };
});

describe("Home", () => {
  it("renders a heading", async () => {
    render(await Home());

    const docH = screen.getByRole("heading", {
      name: "Fix Bug 2",
      level: 2,
    });

    expect(docH).toBeInTheDocument();
  });
});
