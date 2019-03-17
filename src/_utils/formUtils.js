const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};


const validate = values => {
  const errors = {};
  if (!values.companyName) {
    errors.companyName = 'Required';
  }
  return errors;
};

export {onSubmit, validate}