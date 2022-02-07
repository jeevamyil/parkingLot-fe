import Button from '../Button/Button';
import './CheckinPage';
import { actions } from '../Reducer/ActionConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const CheckinPage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.checkin.checkinmsg);
    const [getradio, setRadio] = useState("");
    const [getrbt, setrbt] = useState({ Car: false, Bike: false, Cycle: false });
    const radioHandler = (e) => {
        setRadio(e.target.value);
        setrbt(() => {
            return {
                Car: false,
                Bike: false,
                Cycle: false,
                [e.target.value]: true
            }

        })
    }
    useEffect(()=>{console.log(data)},[data])
     //useEffect( () => () => dispatch({type:actions.RESET}), [] );
    
  

  
    const submitHandler = (e) => {
        e.preventDefault();
        const date = new Date(Date.now());
        let vehicle = 1 + "," + e.target[0].value + "," + getradio + "," + date.toISOString().slice(0, 11) + e.target[5].value + "," + e.target[4].value;
        dispatch({ type: actions.CHECKIN, value: vehicle });
        e.target[0].value = "";
        e.target[4].value = "";
        e.target[5].value = "";
        setRadio("");
        setrbt(() => {
            return {
                Car: false,
                Bike: false,
                Cycle: false
            }

        })

    }
    return (
        <div className='container-lg'>
            <div className='row'>
                <div className='col'></div>
                <div className='col'>
                    <div id="checkin_msg" className='text-center mt-4 mb-3'>
                        <h2>
                            CHECK IN
                        </h2>
                    </div>
                    <div className=''>
                        <form onSubmit={submitHandler}>
                            <div className='row g-3 align-items-center mt-3 mb-2'>
                                <div className='col'> <label htmlFor='vnumber' className='col-form-label' >Vehicle Number</label></div>
                                <div className='col-8'> <input type="text" minLength="3" className='form-control' id="vnumber" placeholder='12356' required></input></div>

                            </div>
                            <div className='row g-3 align-items-center mt-1 mb-3'>
                                <div className='col-auto'><label htmlFor='vtype' className='col-form-label'>Vehicle Type</label></div>
                                <div className='col-auto'> <input type="radio" value="Car" name="vehicle" className="form-check-input mt-3 me-2 ms-4" onChange={radioHandler} checked={getrbt.Car} required /> <p style={{ display: 'inline', fontSize: '1.5rem' }}>🚗</p>
                                    <input type="radio" value="Bike" name="vehicle" onChange={radioHandler} className="form-check-input ms-2 mt-3 me-2" checked={getrbt.Bike} required /> <p style={{ display: 'inline', fontSize: '1.5rem' }}>🛵</p>
                                    <input type="radio" value="Cycle" name="vehicle" onChange={radioHandler} className="form-check-input ms-2 mt-3 me-2" checked={getrbt.Cycle} required /><p style={{ display: 'inline', fontSize: '1.5rem' }}> 🚲</p>
                                </div>


                            </div>
                            <div className='row g-3 align-items-center mt-3 mb-3'>
                                <div className='col'> <label htmlFor='lotname' className='form-label'>Lot Name</label></div>
                                <div className='col-8'> <input type="text" pattern="[A-Y]" className='form-control' maxLength="1" id="lotname" placeholder='A-Y' required></input></div>


                            </div>
                            <div className='row g-3 align-items-center mt-3 mb-5'>
                                <div className='col'> <label htmlFor='time' className='form-label'>Time</label></div>
                                <div className='col-8'>  <input type="time" id="time" className='form-control' placeholder='01:30 AM' required></input></div>


                            </div>
                            <div className='text-center mt-6'>
                                <Button className="Button_nrml" name="Checkin" />
                            </div>
                        </form>
                    </div>
                    <div>
                        {!!data &&
                            Object.keys(data).map((key) => {
                                return (<div className={key === "1" ? 'text-success text-center mt-3 mb-3' : 'text-danger text-center mt-3 mb-3'}><h4>{data[key]}</h4></div>)
                            })
                        }
                    </div>
                </div>
                <div className='col'></div>

            </div>
        </div>
    )
}
export default CheckinPage;