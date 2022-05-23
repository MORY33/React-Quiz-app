import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const TextFieldComp = () => {
    const handleChange = () =>{}
  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth="True">
            <TextField
            onChange={handleChange}
            variant="outlined"
            label="Amount of questions"
            type="number"
            size="small"
            />

        </FormControl>
            
    </Box>
  )
}

export default TextFieldComp