import './App.css'; // App.js에 스타일 적용
import AppRouter from './router/Router';
import { ToastProvider } from "./context/ToastContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <ToastProvider>
        <div className="app">
          <div className="content">
            <AppRouter />
          </div>
        </div>
      </ToastProvider>
  );
}

export default App;
