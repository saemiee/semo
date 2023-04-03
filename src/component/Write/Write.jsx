import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Write = () => {
  const [inputs, setInputs] = useState([{
    Title: '',
    Content: '',
  }]);

  const { Title, Content } = inputs;

  const ChangeMemo = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [Memo, setMemo] = useState([]);
  const key = useRef(1);

  const CreateMemo = (e) => {
    const NewMemo = {
      id: key.current,
      Title,
      Content
    };
    setMemo([...Memo, NewMemo]);

    setInputs({
      Tilte: '',
      Content: ''
    })
    key.current = key.current + 1;

  }
  return (
    <>
      <S.NotePad>
        <S.InputTitle name="title" type="text" placeholder="Please enter the title." value={Title}></S.InputTitle>
        <S.InputMemo name="content" type="text" placeholder="Please enter contnet." value={Content} ></S.InputMemo>
      </S.NotePad>
      <S.Buttons>
        <S.CreateButton>Create</S.CreateButton>
        <Link to="/">
          <S.CencelButton>Cencel</S.CencelButton>
        </Link>
      </S.Buttons>
    </>
  )
}

export default Write;