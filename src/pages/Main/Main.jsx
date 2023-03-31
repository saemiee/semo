import React from 'react';
import { MemoCard, SemoHeader } from '../../component';
import * as S from './style'

const Main = () => {
  return (
    <>
      <SemoHeader></SemoHeader>
      <S.Content>
        <S.MemoContent>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
        </S.MemoContent>
        <S.AddMemoButton>Add Memo</S.AddMemoButton>
      
      </S.Content>
    </>
  )
}

export default Main; 