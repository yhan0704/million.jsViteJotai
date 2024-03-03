import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash";
export default function ExLodash() {
  const filterOptions = (options, state) => {
    console.log("awefawfea");
    return options.filter((option) => {
      const words = state.inputValue.trim().toLowerCase().split("-");
      return words.every((word) => option.title.toLowerCase().includes(word));
    });
  };
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      filterOptions={debounce(filterOptions, 3000)}
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
  { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
  { title: "Godfather-Redemption-hi-mango", year: 1972 },
  { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
  // { title: "The Godfather: Part II", year: 1974 },
  // { title: "faefawfefawfe", year: 1974 },
];
