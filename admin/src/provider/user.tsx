import React, { useEffect, useState } from 'react';

interface User {
  isLogin: boolean;
  userId: string;
  login: (userId: string) => void;
}

export const UserContext = React.createContext<User>({
  isLogin: false,
  userId: '',
  login: () => {},
});

function UserProvider({ children }: any) {
  const [userId, setUserId] = useState('');
  const [isLogin, setLogin] = useState(false);

  const login = async (id: string) => {
    // autologin api 하고 then()
    setUserId(id);
    setLogin(true);
  };

  useEffect(() => {
    if (!isLogin) {
      // 그 로그인 확인 에피아이 넘기고 땅
    }
  }, [isLogin, userId]);

  return (
    <UserContext.Provider value={{ userId, isLogin, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
