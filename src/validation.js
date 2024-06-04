import Validator from 'Validator';

const formValidationRules = {
  lastName: 'required',
  firstName: 'required',
  email: 'email|nullable',
  site: 'url|nullable',
  birthday: 'date|nullable'
};

const validateForm = (data) => {
  const v = Validator.make(data, formValidationRules)
  if (v.fails()) {
    return v.getErrors();
  }
  return null
}

export { validateForm }