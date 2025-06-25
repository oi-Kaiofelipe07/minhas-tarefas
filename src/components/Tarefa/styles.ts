import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`

export const Descricao = styled.input`
  color: #555;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto', sans-serif;
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  &:disabled {
    background-color: transparent;
    border: none;
    color: #777;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  gap: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.amarelo};
`
