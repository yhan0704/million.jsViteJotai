import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import useDebouncedFilter from "./useDebouncedFilter";
interface FilmOption {
  title: string;
  year: number;
}
export default function ExLodash() {
  const [open, setOpen] = useState(false);

  const { filteredData, filterData } = useDebouncedFilter(top100Films);

  // const handleFilterOptions = debounce(
  //   (state: FilterOptionsState<{ title: string; year: number }>) => {
  //     console.log('Debounced function called');
  //     if (!state || !state.inputValue) {
  //       setFilteredOptions(top100Films);
  //       return;
  //     }
  //     const filtered = top100Films.filter((option) => {
  //       const words = state.inputValue
  //         .trim()
  //         .toLowerCase()
  //         .split("-");
  //       return words.every((word) => option.title.toLowerCase().includes(word));
  //     });
  //     setFilteredOptions(filtered);
  //   },
  //   500
  // );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Autocomplete
      options={filteredData}
      getOptionLabel={(option:FilmOption) => option.title}
      filterOptions={(options, state) => {
        filterData(state.inputValue);
        return options;
      }}
      style={{ width: 500 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
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
