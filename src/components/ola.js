import Webcover from '../images/index_banner.png';
import Mobilecover from '../images/index_banner_mobile.png';
import Web2 from '../images/cts-covered.png';
import Web3 from '../images/year-rides.png';
import Web4 from '../images/kms-covered.png';
import Web5 from '../images/ride-budget.png';
import Web6 from '../images/ride-distance.png';
import Web7 from '../images/ride-duration.png';
import { Button, Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../images/for-riders.mp4';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Web8 from '../images/insurance-shop-img.png'
import Web9 from '../images/insurance-1.png'
import Web10 from '../images/insurance-2.png'
import Web11 from '../images/insurance-3.png'
import Web12 from '../images/insure-daily.png'
import Web13 from '../images/insure-hospicash.png'
import Web14 from '../images/insure-trips.png'


function Ola() {
    return (
        <>
            <div>
                {/* web mobile front cover */}
                <Row className='a1'>
                    <Col lg={2} ></Col>
                    <Col lg={8}  >

                        <img src={Webcover} className='a1' />

                        <img src={Mobilecover} className='a2' />
                        <h1 className='a3'><span >Global</span> mobility ecosystem driving <br />communities forward</h1>

                    </Col>
                    <Col lg={2}></Col>

                </Row>
                {/* web front page */}
            </div>
            <div className='a8'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>
                            <Col >
                                <div className='text-center'>
                                    <img src={Web2} className='a4' />
                                    <h1 className='a7'>250+</h1>
                                    <h2 className='a5'>Cities covered</h2>
                                    <p className='a6'>Across India, Australia,<br /> New Zealand and the UK</p>
                                </div>  </Col>

                            <Col >
                                <div className='text-center'>
                                    <img src={Web3} className='a4' />
                                    <h1 className='a7'>55 Cr+</h1>
                                    <h2 className='a5'>Yearly rides</h2>
                                    <p className='a6'>Booked by our customers <br />every year</p>
                                </div> </Col>


                            <Col >
                                <div className='text-center'>
                                    <img src={Web4} className='a4' />
                                    <h1 className='a7'>12 Cr+</h1>
                                    <h2 className='a5'>Kilometers on S1</h2>
                                    <p className='a6'>Distance covered on Ola S1<br /> scooters within a year<br /> of launch</p>
                                </div></Col>
                        </Row>

                    </Col>
                    <Col lg={2}></Col>
                </Row>

            </div >

            {/* mobile page 1 */}
            <div className='aa1'>
                <Row>
                    <Col xs={4}> <img src={Web2} className='a10' /></Col>
                    <Col xs={8}> <p className='a11'> 250+ cities  </p>

                        <p className='a12'>Across India, Australia,<br /> New Zealand and the UK</p></Col>
                </Row>
                <Row>
                    <Col xs={4}> <img src={Web3} className='a10' /></Col>
                    <Col xs={8}> <p className='a11'>55 Crore+ Yearly rides </p>

                        <p className='a12'>Distance covered on Ola S1<br /> scooters within a year<br /> of launch</p></Col>
                </Row>
                <Row>
                    <Col xs={4}> <img src={Web4} className='a10' /></Col>
                    <Col xs={8}> <p className='a11'>12 Crore+ km on s1  </p>

                        <p className='a12'>Booked by our customers <br />every year</p></Col>
                </Row>

            </div>

            {/* ride for buget */}
            <Row >
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h3 className='b1'>There's an Ola ride for everyone</h3>
                    <h3 className='b10'>There's an Ola ride for<br /> everyone</h3>
                    <Row>
                        <Col lg={4}> <img src={Web5} className='b2' /> <h1 className='b3'>For any budget</h1><p className='b4'>From Bikes and Autos to Prime <br /> Sedans and Prime SUVs, you will<br /> find a ride in your budget at your<br /> convenience any time.</p>
                        </Col>
                        <Col lg={4}> <img src={Web6} className='b2' /><h1 className='b3'>For any distance</h1><p className='b4'>Book rides within the city with<br /> Daily, or take a trip to your<br /> favourite destinations outside the<br /> city with Outstation.</p></Col>
                        <Col lg={4}> <img src={Web7} className='b2' /><h1 className='b3'>For any duration</h1><p className='b4'>Easily plan a day out without<br />having to worry about<br /> conveyance with an hour-based<br /> city with Outstation.</p></Col>

                    </Row>
                </Col>
                <Col lg={2}></Col>

            </Row>
            {/* video innovation */}
            <Row className='b7'>
                <Col lg={1}></Col>
                <Col lg={9}>
                    <Row>
                        <Col lg={8}>
                            <video src={video} className='b6' width="860" height="780" controls autoplay /></Col>
                        <Col lg={4}><p className='b8'>Making<br /> innovations since <br /> 2011</p>
                            <p className='b9'>For Riders</p>
                            <p className='b11'>We constantly experiment to come up<br /> with industry-first features for our<br />  riders that eventually become a norm.</p>
                            <p className='b9'>For Drivers</p>
                            <p className='b11'>Our drivers get real time stats to help <br /> optimize their rides better and earn<br /> more, straight from the app.</p>

                        </Col>

                    </Row>

                </Col>
                <Col lg={2}></Col>
            </Row>
            <p className='b12'>Making innovations <br /> since 2011</p>
            {/* swiper */}
            <div className='b15'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>   <video src={video} className='b5' width="405" height="350" controls />
                        <p className='b13'>For Riders</p>
                        <p className='b14'>We constantly experiment to come up<br /> with industry-first features for our<br />  riders that eventually become a norm.</p>



                    </SwiperSlide>
                    <SwiperSlide>   <video src={video} className='b5' width="405" height="350" controls />
                        <p className='b13'>For Drivers</p>
                        <p className='b14'>Our drivers get real time stats to help <br /> optimize their rides better and earn<br /> more, straight from the app.</p>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* experiance the smatter way to play */}
            <div className='b18'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>

                            <Col lg={6}><h4 className='b17'>Experience the<br /> smarter way to pay</h4>
                                <img src={Web8} className='b16' />


                            </Col>
                            <Col lg={6} className=''><p className='b19'>Postpaid + </p><p className='b20'>Trusted by 40 lakh+ users</p>
                                <p className='b23'>Buy now, pay later for all<br /> spends once a month</p>
                                <Row>
                                    <Col lg={4} xs={4}> <img src={Web9} className='b21' /><p className='b22'>Buy now, pay<br /> after 30 days</p></Col>
                                    <Col lg={4} xs={4}> <img src={Web10} className='b21' /><p className='b22'>Shop across<br /> 20,000 apps</p></Col>
                                    <Col lg={4} xs={4}> <img src={Web11} className='b21' /><p className='b22'>Credit limit upto<br /> ₹100,000</p>

                                    </Col>
                                    <hr />

                                </Row>



                            </Col>

                        </Row>
                        <Row >
                            <Col lg={5} className='31'>
                                <p className='b27'>Insurance</p>
                                <p className='b28'>Effective insurances for all <br/> your risks</p>
                                <a href='https://play.google.com/store/apps/details?id=com.olacabs.customer&hl=en_IN&gl=US&pli=1' className='b29'>Explore more on the ola app</a>

                                <a href='https://play.google.com/store/apps/details?id=com.olacabs.customer&hl=en_IN&gl=US&pli=1' className='b29a'>Explore more on the ola app</a></Col>

                            <Col lg={7} >
<div className='webins'>
                                <img src={Web14} className='webins'/>
                                <img src={Web12}className='webins' />
                                <img src={Web13} className='webins'/>
                                </div>



                                <div className='swiper' >
                                    <Swiper
                                        slidesPerView={1.7}
                                        spaceBetween={10}
                                        modules={[Pagination]}
                                    >
                                        <SwiperSlide>    <img src={Web14} />




                                        </SwiperSlide>
                                        <SwiperSlide>    <img src={Web12} />


                                        </SwiperSlide>
                                        <SwiperSlide>     <img src={Web13} />


                                        </SwiperSlide>

                                    </Swiper></div>
                                {/* <a href='https://play.google.com/store/apps/details?id=com.olacabs.customer&hl=en_IN&gl=US&pli=1' className='b32'>Explore more on the ola app</a> */}

                            </Col>
                        </Row>

                    </Col>
                    <Col lg={2}></Col>


                </Row>


            </div>
            {/* making a diference */}
            <div>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={4}>
                        <h1>Making a difference</h1>
                        <p>Ola Foundation, the social welfare arm of Ola, is an outcome of a belief based on real interactions, research, and extensive study on the far-reaching impact of enabling and equipping people.</p>



                    </Col>
                    <Col lg={2}></Col>
                    <Col lg={2}></Col>
                    <Col lg={2}></Col>
                </Row>
            </div>



        </>
    );
}
export default Ola;