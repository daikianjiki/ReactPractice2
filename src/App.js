import logo from './logo.svg';
import './App.css';
import UseRefForm from './components/forms/useRefForm';
import UseStateForm from './components/forms/useStateForm';
import UseCustomHookForm from './components/forms/useCustomHookForm';
import FetchDataUsingHooks from './components/fetch/fetchDataUsingHooks';
import FetchDataUsingGraphQL from './components/fetch/fetchDataUsingGraphQL';

function App() {
  return (
    <>
      <UseRefForm />
      <UseStateForm />
      <UseCustomHookForm />

      <FetchDataUsingHooks />
      <FetchDataUsingGraphQL />
    </>
  )
}

export default App;
