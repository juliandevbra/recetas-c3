import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TestForm from "../Components/TestForm";

describe("Testing TestForm Component", () => {
  test("Should render & change first input", () => {
    render(<TestForm />);
    //const password = screen.getByRole("textbox");
    // const password = screen.getByRole("password");
    const password = screen.getByTestId("password");
    act(() => {
      fireEvent.change(password, { target: { value: "Contraseña123" } });
    });

    expect(password).toBeVisible();
    expect(password.value).toBe("Contraseña123");
  });
  test("Should call button function", () => {
    const handleSubmit = vi.fn();
    render(<TestForm handleSubmit={handleSubmit} />);
    const btn = screen.getByText("Enviar");
    fireEvent.click(btn);
    expect(handleSubmit).toBeCalledTimes(1);
  });
});
