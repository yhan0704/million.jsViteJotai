import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import { matchSorter } from 'match-sorter'

const label = 'some label'

const options: any = [
    { title: "The-Shawshank-Redemption-hello-apple", year: 1994 },
  { title: "The-Godfather-Redemption-bye-banana", year: 1972 },
  { title: "The-Godfather-Redemption-bye-pineapple", year: 1972 },
  { title: "The-find-Godfather-Redemption-hi-mango", year: 1972 },
  { title: "Godfather-Redemption-hi-mango", year: 1972 },
  { title: "The-Godfather-Redemption-hi-mango", year: 1972 },
]

const filterOptions = (options, { inputValue }) => {
  const optionsForSearch = options.map((o) => o.title)
  const terms = inputValue.split(' ')
  const result = terms.reduceRight(
    (accu, term) => matchSorter(accu, term),
    optionsForSearch
  )
  return result
}

export default function FuzzySearch() {
  return (
    <Autocomplete
      filterOptions={filterOptions}
      sx={{ width: 1000 }}
      autoHighlight
      options={options}
      id="custom-input-demo"
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={label} />
      )}
    />
  )
}
