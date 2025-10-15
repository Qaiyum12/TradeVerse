import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-4 ' id='supportWrapper'>
                <h4 className='fs-4'>Support Portal</h4>
                <a href='#'>Track Tickets</a>
            </div>

             <div className='row' id='innerWrapper'>
                <div className='col-6 mb-5 mt-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O, why is my order getting rejected.' className='mb-3'/> <br/>
                    <a href='#'>Track account opening</a> &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='#'>Track segment activation</a> &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='#'>Intraday margin</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='#'>Kite user manual</a>
                    
                </div>

                <div className='col-1'></div>

                <div className='col-5 mb-5 mt-5 '>
                    <h1 className='fs-3'>Feature</h1>
                    <ol>
                        <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href=''>Latest Intraday leverages - MIS & CD</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;