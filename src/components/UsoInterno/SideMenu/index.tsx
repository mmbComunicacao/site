import './styles.css'
import iconAvatar from '../../../images/avatar.jpg';
import iconDashboard from '../../../images/icon-dashboard.svg';
import iconLinks from '../../../images/icon-links.svg';
import iconColaboradores from '../../../images/icon-colaboradores.svg';
import iconMedias from '../../../images/icon-medias.svg';
import iconUnibrasil from '../../../images/icon-unibrasil.svg';
import iconBlog from '../../../images/icon-blog.svg';

export function SideMenu() {
    return (
        <div id='container_nav_menu'>
            <div id='nav_menu'>
                <a href="#" className='nav_menu_hamburger'>
                    <img src={iconDashboard} alt="Início" id='dashboard' />
                    <label htmlFor="dashboard" className='hide-content'>Inicial</label>
                </a>
            </div>
            <div className='nav_menu_options' id='nav_menu_options'>
                <a href="#" className='nav_menu_option'>
                    <img src={iconLinks} alt="Links Úteis" id='links' />
                    <label htmlFor="links" className='hide-content'>Links Úteis</label>
                </a>
                <a href="#" className='nav_menu_option'>
                    <img src={iconColaboradores} alt="Links Úteis" id='links' />
                    <label htmlFor="links" className='hide-content'>Links Úteis</label>
                </a>
                <a href="#" className='nav_menu_option'>
                    <img src={iconMedias} alt="Links Úteis" id='links' />
                    <label htmlFor="links" className='hide-content'>Links Úteis</label>
                </a>
                <a href="#" className='nav_menu_option'>
                    <img src={iconUnibrasil} alt="Links Úteis" id='links' />
                    <label htmlFor="links" className='hide-content'>Links Úteis</label>
                </a>
                <a href="#" className='nav_menu_option'>
                    <img src={iconBlog} alt="Links Úteis" id='links' />
                    <label htmlFor="links" className='hide-content'>Links Úteis</label>
                </a>
            </div>
            <div id='nav_menu_logout'>
                <a href="#" className='logout_a'>
                <img src={iconAvatar} alt="logout" id='log_out' />
                <label htmlFor="logout" className='hide-content'>LogOut</label>
                </a>
            </div>
      </div>
    )
}