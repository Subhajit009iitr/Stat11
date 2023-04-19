import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// Onchange Handler Genrerators

const checkBoxChangeHandler = (setStateFunction) => {
  const onChangeHandler = (event) => {
    setStateFunction(event.target.checked);
  };
  return onChangeHandler;
};

const textFieldChangeHandler = (setStateFunction) => {
  const onChangeHandler = (event) => {
    setStateFunction(event.target.value);
  };
  return onChangeHandler;
};

// Form Field Generators

export const textFormFieldGenerator = (
  label,
  stateVar,
  setStateVar,
  error = () => true,
  errorText,
  fieldType='text'
) => {
  let err = !error();

  return (
    <TextField
      required={true}
      label={label}
      type={fieldType}
      placeholder={label}
      value={stateVar}
      variant="outlined"
      fullWidth={true}
      color="hint"
      error={err}
      helperText={err ? errorText : ""}
      onChange={textFieldChangeHandler(setStateVar)}
      sx={{
        margin: "0.8rem 0",
      }}
    />
  );
};

export const checkBoxFormFieldGenerator = (label, stateVar, setStateVar) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={stateVar}
          onChange={checkBoxChangeHandler(setStateVar)}
        />
      }
    />
  );
};

export const selectFormFieldGenerator = (
  label,
  items,
  stateVar,
  setStateVar,
  multiple=false
) => {
  const menuItems =
    items.length > 0 ? (
      items.map((item, index) => (
        <MenuItem key={index} value={item[0]}>
          {item[1]}
        </MenuItem>
      ))
    ) : (
      <></>
    );

  return (
    <FormControl
      fullWidth
      sx={{
        marginBottom: "1.6rem",
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        required
        multiple={multiple}
        label={label}
        variant="outlined"
        value={stateVar}
        onChange={textFieldChangeHandler(setStateVar)}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};
