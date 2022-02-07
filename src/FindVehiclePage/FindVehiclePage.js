import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { actions } from '../Reducer/ActionConstants';
import './FindVehiclePage';

const FindVehiclePage = () => {
    const data = useSelector((state) => state.find.findmsg);
    if (!!data) {
        var key = Object.keys(data);
        var statusflag = key[0].charAt(0);
        var historyLength = data[key].length;
        var verbiage = key[0].substring(1);
        console.log(statusflag, historyLength, verbiage);
    }

    const dispatch = useDispatch();
    const findHandler = (e) => {
        e.preventDefault();
        let vehicle = 3 + "," + e.target[0].value;
        dispatch({ type: actions.FIND, value: vehicle });
        e.target[0].value = "";

    }
    return (
        <div className='container'>
            <div className='row'>
                <div id="checkin_msg " className='text-center mt-3 mb-3'>
                    <h2>
                        FIND MY VEHICLE
                    </h2>
                </div>
            </div>
            <div className='row' >
                <div className='col'></div>
                <div className='col'> <div className='text-center mt-4 mb-4'>
                    <form onSubmit={findHandler}>
                        <div className='row g-3 align-items-center mt-3 mb-2'>
                            <div className='col'><label htmlFor='vnumber' className='col-form-label mt-4 mb-4'>Vehicle Number</label></div>
                            <div className='col'>   <input type="text" minLength="3" className='form-control mt-4 mb-4' placeholder='1234' id="vnumber" required></input></div>
                        </div>
                        <div>
                            <Button className="Button_nrml" name="Find" />
                        </div>
                    </form>
                </div>
                </div>
                <div className='col'></div>

            </div>

            {(statusflag === '2' && historyLength === 0) && <div id="notavailable_msg" className='text-center text-danger'><h4>{verbiage}</h4></div>
            }

            <div>
                {(statusflag === '1' && historyLength === 0) && <div>
                    <div className='row'>
                        <div className='col'><h2>Parking history</h2>
                            <div id="parking_info" className='card bg-light border-dark card-body text-center ' style={{ width: '20rem', borderRadius: '15px' }}><h4>No parking history available</h4></div></div>
                        <div className='col'></div>
                        <div className='col'> <div id="parking_details" className='text-center'>
                            <h3>parking details</h3>
                            <div className='card bg-light border-dark card-body text-center ' style={{ width: '20rem', borderRadius: '15px' }}><h4 className='text-center text-success'>{verbiage}</h4></div>
                        </div></div>

                    </div>


                </div>
                }

                {((statusflag === '1' || statusflag === '2') && historyLength !== 0) &&
                    <div className='row'>
                        <div className='col'>
                            <div id="parking_history ">
                                <h3>Parking history</h3>
                                <table id="parking_history_table" className='table'>
                                    <thead>
                                        <tr>
                                            <th>FLOOR</th>
                                            <th>DATE</th>
                                            <th>CHECKIN TIME</th>
                                            <th>CHECKOUT TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !!data && Object.keys(data).map((key) => {
                                                return data[key].map((hist) => {
                                                    let i=0;
                                                    
                                                    let temp = hist.split("+");
                                                    let floor = temp[3].charAt(0);
                                                    let date = temp[0].substring(0, 10).replaceAll("-", "/");
                                                    let intime = temp[0].substring(11).toLowerCase();
                                                    let outtime = temp[2].substring(11).toLowerCase();
                                                    console.log(floor, date, intime, outtime);
                                                    return (<tr key={outtime}>
                                                        <td>{floor}</td>
                                                        <td>{date}</td>
                                                        <td>{intime}</td>
                                                        <td>{outtime}</td>
                                                    </tr>)

                                                })
                                                /*return(<tr key={key}>
                                                     <td>{key}</td>
                                                     <td>{data[key][0]}</td>
                                                     <td>{data[key][1]}</td>
                                                     <td>{data[key][2]}</td>
                                                 </tr>) */
                                            })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col'></div>
                        <div className='col'><div id="parking_details" className='text-center'>
                            <h2>Parking details</h2>
                            <div className='card bg-light border-dark card-body text-center ' style={{ width: '20rem', borderRadius: '15px' }}><h4 className={statusflag === "1" ? 'text-center text-success' : 'text-center text-danger'}>{verbiage}</h4></div>
                        </div></div>


                    </div>}


            </div>
        </div>

    )
}
export default FindVehiclePage;