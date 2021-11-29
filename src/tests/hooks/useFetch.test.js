import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("pruebas en use fetch", () => {
  test("debe de retornar la info por defecto", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { data, loading, error } = result.current;
    expect(data).toBeNull();
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });

  test("debe de tener la info deseada, loading false, error false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBeFalsy();
    expect(error).toBeFalsy();
  });

  test("debe de manejar el error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apid/users?page=2")
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBeFalsy();
    expect(error).toBe("No se pudo cargar la info");
  });
});
