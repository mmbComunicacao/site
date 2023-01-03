import { ContentBox } from '../ContentBox'
import './styles.css'

export function Ramais () {
    return(
        <div className='ramais'>
            <h2>Ramais</h2>
            <div>
                <div>
                    <div>
                        <span>Adriele Roque</span>
                        <span>Diretora</span>
                    </div>
                    <div>
                        <div>
                            <span>Ramal Fisico</span>
                            <span>####</span>
                        </div>
                        <div>
                            <span>Ramal Ez Call</span>
                            <span>4002</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="#" alt="Ícone Telefone" />
                    <span>(62) 9 9653-5963</span>
                </div>
                <div>
                    <img src="#" alt="Ícone E-mail" />
                    <span>diretoria@maisbr.org.br</span>
                </div>
                <div>
                    <img src="#" alt="Ícone Skype" />
                    <span>Adriele Roque | Movimento Mais Brasil</span>
                </div>
            </div>
        </div>
    )
}