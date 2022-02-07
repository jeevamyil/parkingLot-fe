import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../Reducer/ActionConstants';
import './ShowLotsPage';

const ShowLotsPage = () => {
    const data = useSelector((state) => state.lots.lots);
    const dispatch = useDispatch();
    console.log(data);
    useEffect(() => {

    }, [data])
    useEffect(() => {
        dispatch({ type: actions.SHOWLOTS });
    }, [])

    //fetch("http://localhost:8088/parkingLotAPI/showlots").then(response => response.json()).then(data => console.log(data));

    return (
        <div className='container'>
            <div id="checkin_msg" className='text-center mt-4 mb-4'>
                <h2>
                    SHOW LOTS
                </h2>
            </div>
            <div className='text-center mt-3 mb-3'>
                <h4>
                    Total number of floors : 25
                </h4>
            </div>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6 justify-content-center'><div>
                    <table className='table text-center'>
                        <thead>
                            <tr>
                                <th>FLOOR</th>
                                <th>CAPACITY</th>
                                <th>OCCUPIED</th>
                                <th>AVAILABLITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !!data && Object.keys(data).map((key) => {
                                    return (<tr key={key}>
                                        <td>{key}</td>
                                        <td>{data[key][0]}</td>
                                        <td>{data[key][1]}</td>
                                        <td>{data[key][2]}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div></div>
                <div className='col-3'></div>
            </div>

        </div>
    )
}
export default ShowLotsPage;