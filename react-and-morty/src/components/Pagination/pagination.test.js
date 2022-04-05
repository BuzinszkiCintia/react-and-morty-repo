import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

test("pagination next page button", async () => {
  const goToNextPage = jest.fn();
  const goToPrevPage = jest.fn();
  const goToSelectedPage = jest.fn();
  const onChange = jest.fn();

  render(<Pagination onChange={onChange} total={3} current={2} />);

  const prevButton = screen.getByTestId("prev");
  fireEvent.click(prevButton);

  expect(onChange).toHaveBeenCalled();
});
