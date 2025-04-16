import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center">
      <div className="bg flex flex-col gap-6 rounded-4xl border border-gray-300 bg-gray-100 p-12 shadow">
        <div className="flex flex-row items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png"
            className="h-[36px] w-[36px]"
          />
          <h1 className="text-xl font-bold">
            Vite with React Router + PocketBase
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black">Get started</h1>
          <p className="text-xl text-gray-500">
            Welcome to Vite with React Router + PocketBase boilerplate! To get
            started, serve your PocketBase first then navigate to
            /src/routes/App.tsx and edit the file. <br></br>
            <br></br> Creating routes/components? Navigate to /src/main.tsx. If
            you don't know how to use React Router, I recommend you to go to{" "}
            <a
              href="https://reactrouter.com/start/data/routing"
              target="_blank"
              className="underline"
            >
              this documentation.
            </a>
          </p>
          <a
            href="http://127.0.0.1:8090/_/"
            target="_blank"
            className="btn btn-md btn-soft btn-success my-4 w-fit"
          >
            Click me to access PocketBase dashboard
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
