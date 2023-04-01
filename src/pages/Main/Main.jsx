import React from 'react';
import { Link } from 'react-router-dom';
import { MemoCard, SemoHeader } from '../../component';
import * as S from './style'

const Main = () => {
  return (
    <>
      <SemoHeader></SemoHeader>
      <S.Content>
        <S.MainContents>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
          <MemoCard></MemoCard>
        </S.MainContents>
        <Link to="/CreateMemo" style={{ textDecoration: "none" }}>
          <S.AddMemoButton>Add Memo</S.AddMemoButton>
        </Link>
      
      </S.Content>
    </>
  )
}

export default Main; 