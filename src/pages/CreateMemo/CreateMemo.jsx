import React from 'react';
import { SemoHeader, Write } from '../../component';
import * as S from './style';

const CreateMemo = () => {
  return (
    <>
      <SemoHeader></SemoHeader>
      <S.CreateContent>
        <Write></Write>
      </S.CreateContent>
    </>
  )
}

export default CreateMemo;