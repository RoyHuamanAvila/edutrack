import './App.css'
import MyRoutes from './routes/routes';
import { Provider } from 'react-redux'
import { store } from './app/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </>
  )
}

export default App
