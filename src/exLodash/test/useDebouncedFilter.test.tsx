import { act, renderHook } from "@testing-library/react";
import useDebouncedFilter from "../useDebouncedFilter";
const top100Films = [
  { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
  { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
  { title: "Godfather-Redemption-hi-mango", year: 1972 },
  { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
];

// debounce 함수를 mock 함수로 대체
jest.mock("lodash/debounce", () => jest.fn((fn) => fn));

describe("useDebouncedFilter", () => {
  it("filters data based on input value", () => {
    const { result } = renderHook(() => useDebouncedFilter(top100Films));

    // filterData 함수를 호출하여 데이터를 필터링
    act(() => {
      console.log(result.current);
      result.current.filterData("bye");
    });

    // 필터링된 결과를 확인
    expect(result.current.filteredData).toEqual([
      { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
      { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
    ]);

    // 다시 필터링을 테스트할 수 있습니다.
  });
  it("filters data based on no input value", () => {
    const { result } = renderHook(() => useDebouncedFilter(top100Films));

    // filterData 함수를 호출하여 데이터를 필터링
    act(() => {
      result.current.filterData("");
    });

    // 필터링된 결과를 확인
    expect(result.current.filteredData).toEqual([
      { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
      { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
      { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
      { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
      { title: "Godfather-Redemption-hi-mango", year: 1972 },
      { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
    ]);

    // 다시 필터링을 테스트할 수 있습니다.
  });
});
