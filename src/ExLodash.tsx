import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash/debounce";
import { useState } from "react";
import { FilterOptionsState } from "@mui/material";

export default function ExLodash() {
  const [filteredOptions, setFilteredOptions] = useState(top100Films);

  const handleFilterOptions = debounce(
    (state: FilterOptionsState<{ title: string; year: number }>) => {
      if (!state || !state.inputValue) {
        setFilteredOptions(top100Films);
        return;
      }
      const filtered = top100Films.filter((option) => {
        const words = state.inputValue
          .trim()
          .toLowerCase()
          .split("-");
        return words.every((word) => option.title.toLowerCase().includes(word));
      });
      setFilteredOptions(filtered);
    },
    2000
  );

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={filteredOptions}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      filterOptions={(options, state) => {
        handleFilterOptions(state);
        return options;
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {option.title}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}

const top100Films = [
  { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
  { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
  { title: "Godfather-Redemption-hi-mango", year: 1972 },
  { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
];
