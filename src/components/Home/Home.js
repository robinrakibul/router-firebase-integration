import React from 'react';
import useFirebase from '../useFirebase';

const Home = () => {
    const {user} = useFirebase;
    return (
        <div>
            <p>The current user is: {user? user.displayName : 'No user logged in!'}</p>
        </div>
    );
};

export default Home;