import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { expect, test } from "vitest";

const setup = (initial?: number) => {
  render(<Counter initial={initial} />);
  const inputStep = screen.getByLabelText("step");
  const counterValue = screen.getByLabelText("value");
  const decBtn = screen.getByText("Dec");
  const incBtn = screen.getByText("Inc");
  const user = userEvent.setup();
  return { counterValue, decBtn, incBtn, user, inputStep };
};

test("Should render initial value", () => {
  const { counterValue } = setup(5);
  expect(counterValue).toHaveTextContent("5");
});

test("Should increase after btn click", async () => {
  const { incBtn, counterValue, user } = setup(5);
  await user.click(incBtn);
  expect(counterValue).toHaveTextContent("6");
});
test("Should decrease after btn click", async () => {
  const { decBtn, counterValue, user } = setup(5);
  await user.click(decBtn);
  expect(counterValue).toHaveTextContent("4");
});
test("Should work after few click result 5", async () => {
  const { counterValue, decBtn, incBtn, user } = setup(5);
  await user.click(decBtn);
  await user.click(incBtn);
  expect(counterValue).toHaveTextContent("5");
});

test("Should render without initial value", () => {
  const { counterValue } = setup();

  expect(counterValue).toHaveTextContent("0");
});

test("Shloud increase by step", async () => {
  const { counterValue, user, inputStep, incBtn } = setup(5);
  await user.clear(inputStep);
  await user.type(inputStep, "6");
  await user.click(incBtn);

  expect(counterValue).toHaveTextContent("11");
});

test("Test invalid input", async () => {
  const { counterValue, user, inputStep, incBtn } = setup(5);
  await user.clear(inputStep);
  await user.type(inputStep, "asd");
  await user.click(incBtn);
  expect(counterValue).toHaveTextContent("6");
});

test("Without input", async () => {
  const { counterValue, user, inputStep, incBtn } = setup(5);
  await user.clear(inputStep);
  await user.click(incBtn);
  expect(counterValue).toHaveTextContent("6");
});
