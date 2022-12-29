import './EmployeesCard.css';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import skype from '../assets/skype.svg';

type EmployeeProps = {
  name: string;
  // occupation: string;
  // ramalF: string;
  // ramalE: string;
  // phone: string;
  // email: string;
  // skype: string;
}

export function EmployeesCard(props: EmployeeProps) {
  return (
    <div className='employee'>
      {/* <p>{props.name}</p> */}
      <div className='employee-part1'>
        <div>
          <p className='employee-name'>Letícia Marçal</p>
          <p className='employee-occupation'>Administrativo</p>
        </div>

        <div className='employee-ramal'>
          <div className='employee-ramal-box'>
            <p className='employee-ramal-type'>Ramal Físico:</p>
            <a className='employee-ramal-fisico' href="#">0000</a>
          </div>
          <div className='employee-ramal-box'>
            <p className='employee-ramal-type'>Ramal EZCall:</p>
            <a className='employee-ramal-ezcall' href="#">0000</a>
          </div>
        </div>
      </div>

      <hr className='employee-line' />

      <div className='employee-part2'>
        <div className='employee-contact'>
          <img className='employee-contact-icon' src={phone} alt='Telefone' />
          <p>62 9 0000-0000</p>
        </div>

        <div className='employee-contact'>
          <img className='employee-contact-icon' src={email} alt='Email' />
          <p>associacao@movimentomaisbrasil.org.br</p>
        </div>

        <div className='employee-contact'>
          <img className='employee-contact-icon' src={skype} alt='Skype' />
          <p>Letícia Marçal | Movimento Mais Brasil</p>
        </div>
      </div>
    </div>
  );
}