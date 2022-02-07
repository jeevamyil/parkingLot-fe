import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { actions } from '../Reducer/ActionConstants';
import './CheckoutPage';

const CheckoutPage = () => {
    const data = useSelector((state) => state.checkout.checkoutmsg);
    const dispatch = useDispatch();

    const checkoutHandler = (e) => {
        e.preventDefault();
        const date = new Date(Date.now());
        let vehicle = 2 + "," + e.target[0].value + "," + date.toISOString().slice(0, 11) + e.target[1].value;
        dispatch({ type: actions.CHECKOUT, value: vehicle });
        e.target[0].value = "";
        e.target[1].value = "";

    }
    return (
        <div className='container-lg'>
            <div className='row '>
                <div className='col'></div>
                <div className='col'>
                    <div id="checkin_msg" className='text-center mt-4 mb-3'>
                        <h2>
                            CHECK OUT
                        </h2>
                    </div>
                    <div className='mt-4 mb-4'>
                        <form onSubmit={checkoutHandler} >
                            <div className='row g-3 align-items-center mt-3 mb-2'>
                                <div className='col'>
                                    <label htmlFor='vnumber' className='col-form-label'>Vehicle Number</label></div>
                                <div className='col-7'>
                                    <input type="text" minLength="3" className='form-control' id="vnumber" placeholder='1234' required></input></div>
                            </div>

                            <div className='row g-3 align-items-center mt-3 mb-5'>
                                <div className='col'>
                                    <label htmlFor='time' className='col-form-label'>Check out Time</label></div>
                                <div className='col-7'>
                                    <input type="time" id="time" className="form-control " required></input></div>
                            </div>
                            <div className='text-center mt-4 mb-4'>
                                <Button className="Button_nrml" name="Check out" />
                            </div>
                        </form>
                    </div>

                </div>
                <div className='col'></div>
                {!!data &&
                    Object.keys(data).map((key) => {

                        return (key === "1" ? <div className='text-success text-center mt-4 mb-4'><h3>Vehicle checked out successfully</h3></div> : <div className='text-danger text-center mt-4 mb-4'><h3>{data[key]}</h3></div>);

                    })
                }
                {!!data &&
                    Object.keys(data).map((key) => {
                        if (key === "1") {
                            return (<div className='text-primary text-center mt-4 mb-4'><h4>{data[key]}</h4></div>)
                        }

                    })
                }
            </div>


        </div>

    )
}
export default CheckoutPage;