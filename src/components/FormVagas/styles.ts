import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const CampoBusca = styled.input`
  padding: 0 16px;
  outline-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
`
export const BtnPesquisar = styled.button`
  background-color: ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  border: 1px solid ${(temaPadrao) => temaPadrao.theme.corPrimaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(temaPadrao) => temaPadrao.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
