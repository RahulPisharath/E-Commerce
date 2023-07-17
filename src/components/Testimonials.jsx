import React from 'react';
import avatar from '../assets/images/avatar_user.png';

const Testimonials = () => {
return (
<div>
    <h4 className='mb-4 bold black text-uppercase'> What Our Customer Say</h4>
    <div id='testimonials'>
        <div className='row people'>
            <div className='col-md-6 col-lg-4 item'>
                <div className='box'>
                    <span className='quote-icon'><svg aria-hidden='true' focusable='false' role='presentation'
                            className='icon-quote' viewBox='0 0 41 35'>
                            <path
                                d='M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z'>
                            </path>
                        </svg>
                    </span>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className='author mt-2'><img className='rounded-circle' src={avatar} />
                    <h5 className='name'>Ben Johnson</h5>
                    <p className='title'>CEO of Company Inc.</p>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 item'>
                <div className='box'>
                    <span className='quote-icon'><svg aria-hidden='true' focusable='false' role='presentation'
                            className='icon-quote' viewBox='0 0 41 35'>
                            <path
                                d='M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z'>
                            </path>
                        </svg>
                    </span>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='author mt-2'><img className='rounded-circle' src={avatar} />
                    <h5 className='name'>Carl Kent</h5>
                    <p className='title'>Founder of Style Co.</p>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 item'>
                <div className='box'>
                    <span className='quote-icon'><svg aria-hidden='true' focusable='false' role='presentation'
                            className='icon-quote' viewBox='0 0 41 35'>
                            <path
                                d='M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z'>
                            </path>
                        </svg>
                    </span>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className='author mt-2'><img className='rounded-circle' src={avatar} />
                    <h5 className='name'>Emily Clark</h5>
                    <p className='title'>Owner of Creative Ltd.</p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Testimonials