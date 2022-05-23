import React from 'react'
import { Box } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

const SelectField = (props) => {
    const { label, options } = props;
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    };


  return (
    <Box mt={3} width="100%">
        <FormControl size="small" fullWidth="True">
            <InputLabel>{label}</InputLabel>
        <Select value={value} label = {label} onChange={handleChange}>
            {options.map(({id, name}) => (
                <MenuItem value={id} key={id}>
                    {name}
                </MenuItem>
            ))}

        </Select>
        </FormControl>

    </Box>     
  )
}

export default SelectField