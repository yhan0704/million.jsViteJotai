import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useDebouncedFilter from "./useDebouncedFilter";
export interface FilmOption {
  title: string;
  year: number;
}
export default function ExLodash() {
  const { filteredData, filterData } = useDebouncedFilter(top100Films);

  return (
    <Autocomplete
      options={filteredData}
      getOptionLabel={(option:FilmOption) => option.title}
      filterOptions={(options, state) => {
        filterData(state.inputValue);
        return options;
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Controllable" placeholder="Favorites" />
      )}
    />
  );
}

const top100Films = [
  { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
  { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
  { title: "Godfather-Redemption-hi-mango", year: 1972 },
  { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
];
