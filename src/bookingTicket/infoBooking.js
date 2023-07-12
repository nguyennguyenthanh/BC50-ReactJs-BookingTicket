import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteSeatAction } from './../store/action';

class InfoBooking extends Component {
    render() {
      return (
        <div>
          <div className='mt-5'>
            <button className='gheDuocChon'></button><span className='text-light' style={{ fontSize: '20px' }}>Seat Booked</span>
            <br />
            <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: '20px' }}>Seat Choosing</span>
            <br />
            <button className='ghe' style={{ marginLeft: "0" }}></button><span className='text-light' style={{ fontSize: '20px' }}>Seat Empty</span>
          </div>

          <div className='mt-5'>
            <table className="table" border={2}>
              <thead>
                <tr className='text-light' style={{ fontSize: '20px' }}>
                  <th>Số Ghế</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='text-warning'>
                {this.props.listBookingSeat.map((gheDangDat, index) => {
                  return <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td><button className='btn btn-danger' onClick={() => {
                      this.props.dispatch(deleteSeatAction(gheDangDat.soGhe))
                    }}>Delete</button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }
const mapStateToProps = (state) => {
  return {
    listBookingSeat: state.userReducer.listBookingSeat,
  }
}
export default connect(mapStateToProps, null)(InfoBooking);