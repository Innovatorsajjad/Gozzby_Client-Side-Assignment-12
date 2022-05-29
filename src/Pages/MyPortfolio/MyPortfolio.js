import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex items-center justify-center mt-5'>
            <div className="bg-base-200 py-5">
                <h2 className="text-3xl text-primary text-center font-bold">Sajjad</h2>

                <div className='px-10 mt-5'>
                    <p className="text-"><span className='font-bold'>Email:</span> sk.sajjad4207@gmail.com</p>
                    <p className="text-"><span className='font-bold'>Educational Background:</span> Studying in HSC</p>
                    <p className="text-"><span className='font-bold'>Technologies I have in Web Development:</span>
                        <ul>
                            <li>1. HTML</li>
                            <li>2. CSS</li>
                            <li>3. Bootstrap 5</li>
                            <li>4. TailwindCSS</li>
                            <li>5. DaisyUI(Component Library)</li>
                            <li>6. React Bootstrap(Component Library)</li>
                            <li>7. JavaScript</li>
                            <li>8. ReactJS</li>
                            <li>9. MongoDB(Basic)</li>
                            <li>10. NodeJS(Basic)</li>
                            <li>11. ExpressJS(Basic)</li>
                        </ul>
                    </p>

                    <p className="text-"><span className='font-bold'>Links of my latest three projects:</span>
                        <ul>
                            <li><a href=" https://my-shop7.netlify.app/"><span className='text-primary'>1. My_Shop</span></a></li>
                            <li><a href="https://wildlife-photography-10.netlify.app/"><span className='text-primary'>2. WildLife_Photography</span></a></li>
                            <li><a href="https://car-max-2efa4.web.app/"><span className='text-primary'>3. CarMax</span></a></li>

                        </ul>
                    </p>
                </div>

            </div>
        </div >
    );
};

export default MyPortfolio;