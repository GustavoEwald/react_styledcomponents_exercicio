import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  background-color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
  color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
    color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
  }

  &:hover a {
    border-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
    background-color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
    color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  background-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
