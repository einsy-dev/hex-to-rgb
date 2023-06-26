import { useState } from "react";

const App = () => {
  const [state, setState] = useState();

  function onInputEvent(event) {
    const reg = RegExp("^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$", "i");
    const value = event.target.value;
    const result = [];

    if (!reg.test(value)) {
      setState("Error");
      return;
    }
    const content = reg.exec(event.target.value);

    for (let i = 1; i < content.length; i++) {
      result.push(parseInt(content[i], 16));
    }

    setState(result.join(", "));
  }

  return (
    <div className="root" style={{ background: `rgb(${state})` }}>
      <div className="main">
        <form onChange={onInputEvent}>
          <input autoFocus={true} defaultValue={"#"}></input>
        </form>
        <div>{state != "Error" ? "rgb (" + state + ")" : state}</div>
      </div>
    </div>
  );
};

export default App;
