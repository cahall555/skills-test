import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectSkills = ({ skills, value, onValueChange }) => {
  return (
    <div>
      <FormControl variant="standard" sx={{ Width: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Skill</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          label="Skill"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {skills.map((Skill) => (
            <MenuItem key={Skill.id} value={Skill.id}>
              {Skill.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectSkills;
