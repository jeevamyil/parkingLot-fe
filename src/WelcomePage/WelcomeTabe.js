
import './WelcomeTable.css';

const WelcomeTable = ({ props }) => {

    return (
       
        <div className='row mt-4 '>
        <div className='col-2'></div>
        <div id="welcome_table " className='col-8 table-responsive justify-content-center '>
            <table id="table_wlcm"  className='table table-bordered  text-center'>
                <thead className='table-dark'>
                    <tr className="welcome_tr">
                        <th  style={{width:'50%'}}>TYPE OF VEHICLE</th>
                        <th  style={{width:'50%'}}> COST/HOUR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="welcome_tr">
                        <td ><h2>🚗</h2></td>
                        <td style={{paddingTop:'2.7%'}}>{props[0]}/hr</td>
                    </tr>

                    <tr className="welcome_tr">
                        <td><h2>🛵</h2></td>
                        <td style={{paddingTop:'2.7%'}}>{props[1]}/hr</td>
                    </tr>

                    <tr className="welcome_tr">
                        <td><h2>🚲</h2></td>
                        <td style={{paddingTop:'2.7%'}}>{props[2]}/hr</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='col-2'></div>
        </div>
    )
}

export default WelcomeTable;