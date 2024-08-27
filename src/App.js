import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm justify-center">
        <button
          data-testid='btn-1'
          onClick={() => console.log("Fucken Hello1")}
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        >
          Edit
        </button>

        <button
          data-testid='btn-2'
          onClick={() => console.log("Fucken Hello2")}
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        >
          View
        </button>

        <button
          data-testid='btn-3'
          onClick={() => console.log("Fucken Hello3")}
          className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        >
          Delete
        </button>
      </span>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
