import React from 'react';

import UsersList from '../components/UsersList';
import user12 from '../../Images/user1.jpg';

const Users = () => {
    //'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    // const img = new Image();
    // img.src = user12;
    const USERS = [
        { id: 'u1', name: 'Max Schwarz', image: user12, places: 3 }
    ];

    return <UsersList items={USERS} />
};

export default Users;