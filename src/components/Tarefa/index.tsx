import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import ContatoClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nomeCompleto: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setNomeCompleto(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{estaEditando ? <em>Editando</em> : nomeOriginal}</S.Titulo>

      <S.Descricao
        placeholder="Nome completo"
        disabled={!estaEditando}
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
      />
      <S.Descricao
        placeholder="E-mail"
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Descricao
        placeholder="Telefone"
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ id, nomeCompleto, email, telefone }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoExcluir onClick={cancelaEdicao}>Cancelar</S.BotaoExcluir>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
