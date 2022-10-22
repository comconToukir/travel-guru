import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import router from './routes/routes';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='whole-background'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;