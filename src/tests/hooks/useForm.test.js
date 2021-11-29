import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("pruebas en useForm", () => {
  const initialForm = {
    name: "Emmanuel",
    email: "emmlop243@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });

  test("debe de cambiar del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    const event = { target: { name: "name", value: "Josefina" } };
    act(() => handleInputChange(event));
    const [values] = result.current;
    expect(values).not.toEqual(initialForm);
    expect(values).toEqual({ ...initialForm, name: "Josefina" });
  });

  test("debe de re-establecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    const event = { target: { name: "name", value: "Josefina" } };
    act(() => handleInputChange(event));
    act(() => reset());
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
