import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { actions } from '../Reducer/ActionConstants';
import './WelcomePage.css';
import WelcomeTable from './WelcomeTabe';

const WelcomePage = () => {
    const data = useSelector((state) => state.init.init);
    let temp = data.split(",");
    const dispatch = useDispatch();
    console.log("datataaa", data);
    useEffect(() => {

    }, [data]);
    useEffect(() => {
        dispatch({type: actions.INIT});
    }, []);
    const navigate = useNavigate();
    const proceedHandler = () => {
        navigate('/options');
    }
    return (
        <div className='container'>
            <div id="greeting_msg" className='col-lg mb-4 mt-3'>
                <h2>
                    WELCOME TO PARKING
                </h2>
            </div>
            <div id="info_msg" className='mt-5 mb-5'>
                <div className='col'>
                    <h3 id="msg_floor">
                        Total floors: {temp[0]}({temp[1]}-{temp[2]})
                    </h3>
                </div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'>
                    <h3 id="msg_capacity">
                         Capacity of each floor : {temp[3]}
                    </h3>
                </div>
            </div>
            <div>
                <WelcomeTable props={[temp[4],temp[5],temp[6]]}/>
            </div>
            <div id="btn_proceed" className=' mt-3'>
                <Button className="Button_nrml" name="PROCEED" customEvent={proceedHandler} />
            </div>
        </div>
    )
}

export default WelcomePage;