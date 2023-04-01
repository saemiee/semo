import React, { useState } from 'react';
import * as S from './style';

const Write = () => {
  return (
    <>
      <S.NotePad>
        <S.InputTitle name="title" type="text" placeholder="Please enter the title."></S.InputTitle>
        <S.InputMemo name="content" type="text" placeholder="Please enter contnet."></S.InputMemo>
      </S.NotePad>
    </>
  )
}

export default Write;