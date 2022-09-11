import * as S from './styles';
export function Header() {
  return (
    <S.Wrapper>
      <S.Welcome>
        <h1>
          Good Morning,<b>{' Sadrak!'}</b>
        </h1>
        <span>September - 10</span>
      </S.Welcome>
    </S.Wrapper>
  );
}
