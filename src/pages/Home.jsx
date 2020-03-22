import React, { useContext } from 'react';
import Homecontent from '../components/homeContent'
import { AuthContext } from '../contexts/authContext'
import Loading from '../components/loading';
const Home = () => {
    const { isAuth } = useContext(AuthContext)
    return (

        <div className="">
            {
                isAuth ?
                    <Loading to="catalogue" />
                    :
                    <Homecontent />
            }
        </div>

    );
}

export default Home;