import React from 'react';
import { TextField, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import MaskedInput from 'react-text-mask';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => inputRef(ref ? ref.inputElement : null)}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
      placeholderChar={'\u2000'}
      keepCharPositions
      showMask
    />
  );
}

export const AddProcedure = (props) => {
  return (
    <>
      <div id="add-procedure-date-container">
        <FormControl>
          <InputLabel htmlFor="formatted-text-mask-input">Date</InputLabel>
          <Input
            onChange={ (e) => {
              props.handleProcedureChange(e, props.index) 
            }}
            name="date"
            id="formatted-text-mask-input"
            inputComponent={ TextMaskCustom }
          />
          <FormHelperText>mm/dd/yy</FormHelperText>
        </FormControl>
      </div>
      <div id="add-procedure-entry-container">
        <TextField
          id="outlined-multiline-static"
          label="Procedure"
          name='entry'
          value={ props.procedures.entry}
          onChange={ (e) => {
            props.handleProcedureChange(e, props.index) 
          }}
          multiline
          variant="outlined"
          rows={4}
          fullWidth/>
      </div>

  </>
  )
}