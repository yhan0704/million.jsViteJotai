import { useState } from "react";
import debounce from "lodash/debounce";
interface FilmOption {
  title: string;
  year: number;
}
const useDebouncedFilter = (data:FilmOption[], delay = 500) => {
  const [filteredData, setFilteredData] = useState(data);

  const filterData = debounce((inputValue) => {
    if (!inputValue) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((option:FilmOption) => {
      const words = inputValue
        .trim()
        .toLowerCase()
        .split("-");
      return words.every((word:string) => option.title.toLowerCase().includes(word));
    });

    setFilteredData(filtered);
  }, delay);

  return { filteredData, filterData };
};

export default useDebouncedFilter;