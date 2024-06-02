import { CustomButton } from "./components/html/Button";
import { CustomInput } from "./components/html/Input";

//Wrapping HTML Elements
function App() {
  return (
    <div>
      <CustomButton
        variant="primary"
        onClick={() => console.log(`CustomBtn Clicked!👆🏻`)}>
        Primary Btn
      </CustomButton>
      <CustomInput />
    </div>
  );
}

export default App;
