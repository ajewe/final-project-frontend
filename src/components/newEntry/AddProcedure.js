import React from 'react';
import { TextField, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  procedureDate: {
    width: '60%',
  },
  procedureEntry: {
    width: '70%',
  }
})

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export const AddProcedure = (props) => {
  const classes = useStyles()

  return (
    <div>
    <FormControl>
      <InputLabel htmlFor="formatted-text-mask-input">Date</InputLabel>
      <Input
        onChange={ props.handleProcedureChange }
        name="date"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom}
      />
      <FormHelperText>mm/dd/yy</FormHelperText>
    </FormControl>
    <TextField
      id="outlined-multiline-static"
      className={ classes.procedureEntry }
      label="Procedure"
      name='entry'
      value={ props.procedures.entry}
      onChange={ (e) => {
        props.handleProcedureChange(e, props.index) 
      }}
      multiline
      variant="outlined"
      rows={4}
    />
  </div>
  )
}