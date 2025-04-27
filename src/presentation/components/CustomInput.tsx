import React, { useState } from 'react';
import styled from 'styled-components/native';

type Props = {
  title: string;
  value: string;
  onChange: (text: string) => void;
};

const Input = styled.TextInput`
  height: 40px;
  border-color: #963a3a;
  border-width: 1px;
  border-radius: 20px;
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export function CustomInput({title, value, onChange,...rest}: Props) {
 
  return (
      <Input
      value={value}
      onChangeText={onChange}
      placeholder={title}
      placeholderTextColor="#ccc"
      accessibilityLabel={title}
      accessibilityHint={`Campo para digitar ${title}`}
      {...rest}
      />
  );
}
