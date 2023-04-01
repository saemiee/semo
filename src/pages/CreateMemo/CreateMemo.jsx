import React from 'react';
import { SemoHeader, CreateButton, Write } from '../../component';
import { Link } from 'react-router-dom';
import * as S from './style';

const CreateMemo = () => {
  return (
    <>
      <SemoHeader></SemoHeader>
      <S.CreateContent>
        <Write></Write>
        <CreateButton></CreateButton>
        <Link to="/">
          <S.Cencel>Cencel</S.Cencel>
        </Link>
      </S.CreateContent>
    </>
  )
}

export default CreateMemo;