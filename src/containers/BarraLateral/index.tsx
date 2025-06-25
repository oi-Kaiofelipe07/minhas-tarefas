import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import { Botao, Campo } from '../../styles'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {mostraFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contato"
              value={termo}
              onChange={(evento) => {
                dispatch(alteraTermo(evento.target.value))
              }}
            />
            <S.Filtros>
              <FiltroCard criterio="todas" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar à Lista de Contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
