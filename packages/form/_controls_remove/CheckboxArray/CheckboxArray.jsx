import React from 'react';
import CheckboxesListBase from '../../components/CheckboxesList';

const CheckboxesList = ({
  field,
  form,
  ...props
}) => {
  return (
    <CheckboxesListBase
      {...field}
      {...props}
      data={props.options || []}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      selected={field.value || []}
    />
  );
};

export default CheckboxesList;
