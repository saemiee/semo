import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Write = () => {
  const [Title, setTitle] = useState([]);
  const [Content, setContent] = useState([]);

  const TitleChange = (e) => {
    setTitle(e.target.value);
  };

  const ContentChange = (e) => {
    setContent(e.target.value);
  }

  const [notes, setNotes] = useState([]);

  const CreateMemo = () => {
    const newMemo = {
      
    };
    setNotes([...notes, newMemo]);
  }
    
  const onCencel = () => {
    setTitle('');
    setContent('');
  }

  
  return (
    <>
      <S.NotePad>
        <S.InputTitle 
          name="title" 
          type="text" 
          placeholder="Please enter the title." 
          value={Title}
          onChange={TitleChange}
        ></S.InputTitle>
        <S.InputMemo 
          name="content" 
          type="text" 
          placeholder="Please enter contnet." 
          value={Content}
          onChange={ContentChange}
        ></S.InputMemo>
      </S.NotePad>
      <S.Buttons>
        <Link to="/">
          <S.CreateButton onClick={CreateMemo}>Create</S.CreateButton>
        </Link>
        <Link to="/">
          <S.CencelButton onClick={onCencel}>Cencel</S.CencelButton>
        </Link>
      </S.Buttons>
    </>
  )
}


export default Write;