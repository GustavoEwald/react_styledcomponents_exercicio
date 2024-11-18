import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'

import { Container, EstiloGlobal } from './styles'
import { TemaPadrao } from './themes/padrao'

function App() {
  return (
    <ThemeProvider theme={TemaPadrao}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
