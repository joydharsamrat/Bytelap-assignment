import React from 'react';
import { Form } from 'react-bootstrap';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div class="row my-5">
                <div className='col col-lg-6'>

                    <div className='search'>
                        <Form.Control
                            type="text"
                            placeholder='Search'
                            className='ps-4'
                        />
                    </div>
                    <NavBar2></NavBar2>
                    <div className='first'>
                        <p className='d-lg-none'>one</p>
                    </div>
                    <div className='second'>
                        <p className='d-lg-none'>two</p>
                    </div>
                    <div className='third'>
                        <p className='d-lg-none'>three</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;