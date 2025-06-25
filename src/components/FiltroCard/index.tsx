import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'todas'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => filtro.criterio === criterio

  const contarContatos = () => tarefas.itens.length

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio }))
  }

  const ativo = verificaEstaAtivo()
  const contador = contarContatos()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
