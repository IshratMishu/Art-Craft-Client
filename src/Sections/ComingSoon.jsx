import { Link } from 'react-router-dom';
import soon from '../assets/images/pf-img13.jpg';
import { Typewriter } from 'react-simple-typewriter';

const ComingSoon = () => {
    return (
        <div className='h-[600px] mt-20 mx-auto bg-center' style={{ backgroundImage: `url(${soon})` }}>
            <div className=' inset-0 bg-[#50d556] bg-opacity-40 h-[600px]'>
                <div className='text-center px-10 py-20 space-y-6 text-white'>
                    <h1 className='text-[30px] lg:text-[40px] md:text-[32px] font-bold'>Get ready to elevate your space with our upcoming <span>
                        <Typewriter
                            words={['ceramic masterpieces!']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                        />
                    </span></h1>
                    <p className='font-medium md:text-xl underline'>Sign up now to be the first to experience the fusion of artistry and craftsmanship.</p>
                    <Link to='/registration'><button className='bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]'>Sign Up Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;