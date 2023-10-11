import "./styles.css";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import HomePage from "./Components/HomePage";
// import PhotoCont from "./Components/PhotoContainer";

export default function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="contentContainer">
          <HomePage />
          <InputField />
        </div>
        <div className="appImage">{/* <PhotoCont /> */}</div>
      </div>
    </>
  );
}
