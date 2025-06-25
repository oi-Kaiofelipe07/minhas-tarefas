import { useSelector } from 'react-redux'
import Contato from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    if (!termo || termo.trim() === '') {
      return itens
    }

    return itens.filter((contato) =>
      contato.nomeCompleto.toLowerCase().includes(termo.toLowerCase())
    )
  }

  const contatos = filtraContatos()
  const mensagem = `${contatos.length} contato(s) encontrado(s)${
    termo ? ` com "${termo}"` : ''
  }`

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
