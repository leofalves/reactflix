/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
    width:20%
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: ${props => (props.type === 'color' ? ' 62px;' : ' 57px;')};
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;


function FormField({
  value, onChange, type, name, label,
}) {
  const fieldId = `id_${name}`;

  const isTextArea = type === 'textarea';
  const Tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={Tag}
          type={type}
          id={fieldId}
          value={value}
          onChange={onChange}
          name={name}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );

  /*
  switch (type) {
    case 'textarea':
      return (
        <div>
          <label
            htmlFor={fieldId}
          >
            {label}
            <textarea
              value={value}
              name={name}
              onChange={onChange}
            />
          </label>
        </div>
      );
    default:
      return (
        <div>
          <label
            htmlFor={fieldId}
          >
            {label}
            <input
              type={type}
              id={fieldId}
              value={value}
              onChange={onChange}
              name={name}
            />
          </label>
        </div>
      );
  }
  */
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
