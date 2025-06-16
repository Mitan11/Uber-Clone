import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

function UserContext({ children }) {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: '',
        },
        password: ''
    })

    return (
        <UserDataContext.Provider value={user}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserContext;
