import React, { useState, useRef } from 'react'
import '../../style/Banner.css'
import {Button} from "@material-ui/core"
import { Link } from 'react-router-dom'
// import Background from '/test/img-home.png'


function Banner() {
  const [inHover, setHover] = useState(false);
  const myRef = useRef(null);

  const scrollToElement = () =>{
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetHeight - 60
    });
  }

  const myStyleBackground={
    background: `url('${process.env.PUBLIC_URL}/images/banner.jpg') center center/cover no-repeat`
  }

  return (
    <div className='banner_container' style={myStyleBackground} ref={myRef}>
      <h1>TRẢI NGHIỆM KỲ NGHỈ TUYỆT VỜI</h1>

      <p>Trải nghiệm trọn vẹn - Giá cả phải chăng</p>
      
      <div className='banner_btn'>
        {/* <Link> */}
          <Button 
            variant="outlined"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={scrollToElement}
           >
            KHÁM PHÁ 
            {!inHover &&
            <i className='fas fa-chevron-right' />}
            {inHover &&
            <i class="fas fa-arrow-right"></i>}
          </Button>
        {/* </Link> */}
      
      </div>
    </div>
  );
}

export default Banner;
