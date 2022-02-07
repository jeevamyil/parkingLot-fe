import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './OptionsPage.css'

const OptionsPage = () => {
    const navigate = useNavigate();

    const checkinHandler=()=>{
        navigate('/checkin');
    }
    const checkoutHandler=()=>{
        navigate('/checkout');
    }
    const findHandler=()=>{
        navigate('/find');
    }
    const lotHandler=()=>{
        navigate('/lots');
    }

    return (
        <div id="main_div" className='container-lg text-end ' style={{marginTop:"7rem"}}>
            <div className='row text-center mb-5'>
                <div className='col'></div>
                <div className='col  d-flex flex-wrap justify-content-center'>
                <div className='card bg-light border-dark card-body text-center ' style={{width:'20rem', borderRadius:'10%'}}>
            <div className='mt-3 mb-3'>
                <Button className="Button_nrml " name="CHECKIN" customEvent={checkinHandler}></Button>
            </div>
            <div  className='mt-3 mb-3'>
                <Button className="Button_nrml" name="CHECKOUT" customEvent={checkoutHandler}></Button>
            </div>
            <div  className='mt-3 mb-3'>
                <Button className="Button_nrml" name="FIND VEHICLE" customEvent={findHandler}></Button>
            </div>
            </div>
                </div>
                <div className='col'></div>
            </div>
            
            <div id ="show_lots" className='me-3'>
                <Button className="Button_nrml" name="SHOW LOTS" customEvent={lotHandler}></Button>
            </div>
        </div>
    )
}

export default OptionsPage;