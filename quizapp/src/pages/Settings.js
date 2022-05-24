import { Box, Button, CircularProgress, Typography } from "@mui/material"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const {response, error, loading} = useAxios({url: "/api_category.php"})
  if(loading){
    return(
      <Box mt={20}>
         <CircularProgress/>
      </Box>
    )
  }

  if (error){
    return(
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong
      </Typography>
    )
  }

  const difficultyOptions = [
    {id: "easy", name: "easy"},
    {id: "medium", name: "medium"},
    {id: "hard", name: "hard"},
  ]

  const typeOptions = [
    {id: "multiple", name:"multiple choice"},
    {id: "boolean", name:"True/False"}

  ]

  // console.log(response)
  const handleSubmit = e => {
    e.preventDefault();
  };
  
  return(
    // bgcolor: 'text.disabled',
    <Box sx={{  borderRadius: '16px'}} p={7}> 
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label ="Category"/>
      <SelectField options={difficultyOptions} label ="Difficulty"/>
      <SelectField options={typeOptions} label ="Type"/>
      <TextFieldComp />
      <Box mt={5} width="100%">
        <Button fullWidth="True" variant="contained" type="submit">Play</Button>
      </Box>
    </form>
    </Box>
  )
}

export default Settings