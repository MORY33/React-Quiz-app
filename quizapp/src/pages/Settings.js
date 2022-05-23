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
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label ="category"/>
      <SelectField options={difficultyOptions} label ="difficulty"/>
      <SelectField options={typeOptions} label ="type"/>
      <TextFieldComp/>
      <Box mt={5} width="100%">
        <Button fullWidth="True" variant="contained" type="submit">Play</Button>
      </Box>
    </form>
  )
}

export default Settings