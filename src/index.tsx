import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient(
  ({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  })
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
<React.StrictMode>
    <App/>
  </React.StrictMode>
  </QueryClientProvider>
  
)