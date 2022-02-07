import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { actions } from '../Reducer/ActionConstants';
import './header.css';

const Header = () => {
    const url = useLocation();
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const homeHandler = () => {
        dispatch({type:actions.RESET});
        navigate('/');
        
    }
    return (

        <header className='container-fluid-lg mb-4'>
            {url.pathname ==="/"&& <div className='row'>
                
                <div id="title_div " className=' text-center' style={{display:"inline-block"}}>
                    <h1 id="title_text ">
                    Ⓟ PARKING LOT
                    </h1>
                </div>
                <div className='col'></div>
            </div>}
            {url.pathname!=="/"&& <div className='row'>
                <div id="home_btn" className='col d-flex align-content-center justify-content-start flex-wrap ms-3' style={{display:"inline-block"}}>
                    <Button className="" id="hbtn" name="Home" customEvent={homeHandler}></Button>
                </div>
                <div id="title_div " className='col text-center' style={{display:"inline-block"}}>
                    <h1 id="title_text ">
                    Ⓟ PARKING LOT
                    </h1>
                </div>
                <div className='col'></div>
            </div>}
            
            
        </header>



    )
}

export default Header;
