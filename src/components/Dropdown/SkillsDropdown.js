import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectSkills = ({data}) => {


  // const handleChange = (event) => {
  //   fetchSkills(event.target.value);
  // };

  return (
    <div>
      <FormControl variant="standard" sx={{ Width: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Skill</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={data}
          // onChange={handleChange}
          label="Skill"
        >
        
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data.map((Skill) => (
          <MenuItem value={10}>{Skill.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectSkills;