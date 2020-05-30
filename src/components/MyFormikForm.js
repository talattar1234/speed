import React from 'react';
import { withFormik } from 'formik';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, FormControlLabel, Checkbox } from '@material-ui/core';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValidating   
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
        helperText={(errors.name && touched.name) && errors.name}
      />

    <FormControl >
        <InputLabel id="demo-simple-select-label">Student</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.student}
          onChange={handleChange("student")}
          onBlur={handleBlur}
        >
          <MenuItem value={""}>Select a student</MenuItem>
          <MenuItem value={"Vidal"}>Vidal</MenuItem>
          <MenuItem value={"Naprastek"}>Naprastek</MenuItem>
          <MenuItem value={"Shlomoviz"}>Thirty</MenuItem>
        </Select>
        {(errors.student && touched.student) && <FormHelperText>{errors.student}</FormHelperText>}
      </FormControl>


      <FormControlLabel
        control={
          <Checkbox
            checked={values.isVidal}
            onChange={handleChange("isVidal")}
            color="primary"
          />
        }
        label="Is VIDAL"
      />

      
      <Button variant="contained" disabled={isSubmitting} type="submit">Submit</Button>
      {isSubmitting && !isValidating && <div style={{color: 'red'}}>Submitting!!!</div>}
    </form>
  );
};

const MyFormikForm = withFormik({
  mapPropsToValues: () => ({ name: '', student: '', isVidal: false }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    if(values.student===''){
      errors.student = 'Required'
    }
    return errors;
  },

  handleSubmit: (values,action) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      action.setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(MyForm);

export default MyFormikForm;