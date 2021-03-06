import React from 'react'
import { Box } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions'

const SelectField = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch();
    // console.log(label)
    // console.log(options)
    const [value, setValue] = useState('');

    // console.log(options )
    const handleChange = (e) => {
        setValue(e.target.value)
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Category":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    };


  return (
    <Box mt={3} width="100%">
        <FormControl size="small" fullWidth="True">
            <InputLabel>{label}</InputLabel>
        <Select value={value} label = {label} onChange={handleChange} variant="filled">
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