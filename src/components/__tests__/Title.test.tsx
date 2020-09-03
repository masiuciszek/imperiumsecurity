import * as React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../elements/Title";
describe("<Test/>", () => {
  test("should render title with title and subTitle", async () => {
    const mainTitle = "mainTitle";
    const subTitle = "subTitle";
    render(
      <Title className="test-title" title={mainTitle} subTitle={subTitle} />
    );
    expect(screen.getByTestId("elements-Title").textContent).toBe(mainTitle);
    expect(screen.getByText(subTitle)).toBeDefined();
    // expect(screen.getByText(/subTitle/i)).toBeInTheDocument();

    screen.debug();
  });
});
