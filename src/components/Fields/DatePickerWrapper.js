import React from 'react';
import 'date-fns';
import {
  DatePicker
} from 'material-ui-pickers';

function DatePickerWrapper(props) {
  let date = new Date();
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name="{name}"
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? date : value}
    />
  );
}

export default DatePickerWrapper;
