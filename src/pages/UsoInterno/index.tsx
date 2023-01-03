import './styles.css'
import { Ramais } from '../../components/UsoInterno/Ramais';
import { Informatives } from '../../components/UsoInterno/Informatives';
import { ContentBox } from '../../components/UsoInterno/ContentBox';
import { SideMenu } from '../../components/UsoInterno/SideMenu';

export function UsoInterno() {
  return (
    <div className='uso_interno'>

      <SideMenu />

      <div className='conteudo_uso_interno' id="conteudo_uso_interno">

        <div id='header'>
          <h1>Dashboard</h1>
        </div>

        <div id='content_page'>
          <div>

            <div className='content_header'>
              <Informatives />
            </div>
            
            {/* <ContentBox />
            <ContentBox /> */}

          </div>

          <Ramais />

        </div>

      </div>
    </div>
  )
}