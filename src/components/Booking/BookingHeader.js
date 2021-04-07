import React from 'react'
import "../../style/BookingHeader.css"

function BookingHeader() {
    return (
        <div className="bookingHeader">
            <div className="bookingHeader_container">
                <div className="bookingHeader_block">
                    
                    <div className="bookingHeader_back">
                        <a className="bookingHeader_icon" href="/room-detail?id=1">
                            <svg viewBox="0 0 32 32">
                                <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"/> 
                            </svg>
                        </a>
                    </div>

                    <div className="bookingHeader_text">
                        Xác nhận đặt phòng và phương thức thanh toán
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingHeader