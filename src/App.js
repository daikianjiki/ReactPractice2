import './App.css';
import UseRefForm from './components/forms/useRefForm';
import UseStateForm from './components/forms/useStateForm';
import UseCustomHookForm from './components/forms/useCustomHookForm';
import FetchDataUsingHooks from './components/fetch/fetchDataUsingHooks';
import FetchDataUsingGraphQL from './components/fetch/fetchDataUsingGraphQL';
import { CgHello } from 'react-icons/cg'
import { BiCalendar } from 'react-icons/bi'
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';

function App() {
  return (
    <>
      {/* <UseRefForm />
      <UseStateForm />
      <UseCustomHookForm />

      <FetchDataUsingHooks />
      <FetchDataUsingGraphQL /> */}
      {/* <h1 className="text-3xl font-bold underline">
        <CgHello /> Hello world!
      </h1> */}
      <div className='App container mx-auto mt-3 font-thin'>
        <h1 className='text-5xl mb-3'>
          <BiCalendar className='inline-block text-red-400 align-top' />Your Appointments</h1>
          <AddAppointment />
          <Search />
      </div>
    </>
  )
}

export default App;
