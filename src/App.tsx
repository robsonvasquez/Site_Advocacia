import './App.css'

import TopBar from './components/topBar/topBar'

import Main from './components/main/main'
import BottonBar from './components/bottonBar/bottonBar'
import Cape from './components/cape/cape'
import Header from './components/header/header'

function App() {

  return (
    <div>
      <Header></Header>
      <TopBar></TopBar>
      <Cape></Cape>
      <Main></Main>
      <BottonBar></BottonBar>
    </div>
  )
}

export default App
