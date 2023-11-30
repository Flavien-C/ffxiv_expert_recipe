import { Advice } from "./pages/advice";

export default function App() {
  return (
    <>
      <header className="bg-slate-700 m-2 px-2 border-2 rounded">
        Readme
        <br />
        Enter values in form, press submit button and see advices in columns.
      </header>
      <Advice />
      <footer className="bg-slate-700 m-2 text-center border-2 rounded">
        FINAL FANTASY XIV &#169; 2010-2023 SQUARE ENIX CO., LTD. All Rights
        Reserved.
      </footer>
    </>
  );
}
