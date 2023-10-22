import React from 'react'
import './selectInput.css'
import { FormControl,Select,OutlinedInput,MenuItem } from '@mui/material'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
   //   width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



function SelectInputType() {

  return (
    <div className="selectInputType-container">
        <FormControl sx={{ m: 0, width: "100%" }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={""}
          ///onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          fullWidth
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}

            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectInputType