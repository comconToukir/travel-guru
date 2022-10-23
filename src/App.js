import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import router from './routes/routes';
import { onAuthStateChangedListener } from './utils/firebase.utils';
import { UserContext } from './contexts/user.context';

import './App.css';

const queryClient = new QueryClient();

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      // console.log(user);
    })

    return unsubscribe;
  }, [setUser])

  return (
    <div className='whole-background'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;