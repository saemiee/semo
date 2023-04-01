import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

const SemoHeader = () => {
  return (
    <>
      <S.header>
        <Link to="/">
        <S.logo />
        </Link>
      </S.header>
    </>
  )
}

export default SemoHeader;