import styled,{css} from 'styled-components'

export const Wrapper = styled.header`
${({theme}) => css`
width: 100%;
`}
`
export const Welcome = styled.div`
${({theme}) => css`
width: 100%;

h1{
  color: ${theme.colors.primary};
  font-family: ${theme.fontFamily.secondary};
  font-weight: ${theme.fontWeight.light};

  b{
  font-weight: ${theme.fontWeight.semiBold};

  }
}
`}
`
export const Notifys = styled.div`
${({theme}) => css`
width: 100%;
`}
`
