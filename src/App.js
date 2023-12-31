import './App.css';
import Form from './componrnts/form/Form';
import Table from './componrnts/table/Table';

function App() {
  return (
    <>
      <div className='flex gap-24 items-center justify-center w-full'>
        <div className='w-[90%] flex flex-col items-center justify-center gap-24 sm:w-full'>
          <div className='w-full'>
            <Form />
          </div>
          <div className='w-full '>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
