import React, { useState } from 'react';
import styled from 'styled-components/native';

type Props = {
  title: string;
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

export function CustomInput({title}: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

  return (
      <Input
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder={title}
        placeholderTextColor="#ccc"
        accessibilityLabel={title}
        accessibilityHint={`Campo para digitar ${title}`}
      />
  );
}
