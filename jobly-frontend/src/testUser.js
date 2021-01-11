import React from 'react';
import UserContext from './UserContext';

const testUser = {
    username: 'test',
    first_name: 'Testy',
    last_name: 'McTestface',
    email: 'test@test.org',
    photo_url: null
};

const UserProvider = ({ children, currentUser=testUser }) => (
    <UserContext.Provider value={{currentUser}}>
        {children}
    </UserContext.Provider>
)

export { UserProvider };