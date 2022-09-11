import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import * as S from './styles';
import { combineTheme, dark, primary } from '../styles/Themes';
import { useState } from 'react';
import { AsideMenu } from '../components/AsideMenu';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(primary));
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>DashTheme</title>
      </Head>
      <S.MainGrid>
        <S.WrapperMenu>
          <AsideMenu />
        </S.WrapperMenu>
        <S.WrapperContent>
          <Header />
        </S.WrapperContent>
        <S.WrapperAside>
          <h1>Ola mundo</h1>
        </S.WrapperAside>
      </S.MainGrid>
    </ThemeProvider>
  );
};

export default Home;
