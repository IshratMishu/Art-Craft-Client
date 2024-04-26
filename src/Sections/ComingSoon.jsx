import { Link } from 'react-router-dom';
import soon from '../assets/pf-img13.jpg';
import { Typewriter } from 'react-simple-typewriter';

const ComingSoon = () => {
    return (
        <div className='App h-[600px] mt-20 mx-auto bg-no-repeat bg-center' style={{ backgroundColor: 'black', backgroundImage: `url(${soon})` }}>
            <div className=' inset-0 bg-green-600 bg-opacity-35 h-[600px]'>
                <div className='text-center px-10 py-20 space-y-4 text-white'>
                    <h1 className='text-[30px] lg:text-[40px] md:text-[32px] font-bold'>Get ready to elevate your space with our upcoming <span>
                        <Typewriter
                            words={['ceramic masterpieces!']}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                        />
                    </span></h1>
                    <p className='font-medium md:text-lg underline'>Sign up now to be the first to experience the fusion of artistry and craftsmanship.</p>
                    <Link to='/registration'><button className='btn mt-4'>Sign Up Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;