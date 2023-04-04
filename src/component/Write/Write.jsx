import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Write = () => {
  const [inputs, setInputs] = useState([{
    Title: '',
    Content: '',
  }]);

  const { Title, Content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCencel = () => {
    setInputs({
      Title: '',
      Content: ''
    })
  }

  
  return (
    <>
      <S.NotePad>
        <S.InputTitle 
          name="title" 
          type="text" 
          placeholder="Please enter the title." 
          value={Title}
          onChange={onChange}
        ></S.InputTitle>
        <S.InputMemo 
          name="content" 
          type="text" 
          placeholder="Please enter contnet." 
          value={Content}
          onChange={onChange}
        ></S.InputMemo>
      </S.NotePad>
      <S.Buttons>
        <S.CreateButton>Create</S.CreateButton>
        <Link to="/">
          <S.CencelButton onClick={onCencel}>Cencel</S.CencelButton>
        </Link>
      </S.Buttons>
    </>
  )
}

export default Write;