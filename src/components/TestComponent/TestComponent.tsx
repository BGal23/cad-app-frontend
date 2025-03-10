import { useState } from "react";
import { Button } from "./style";

const TestComponent = () => {
  const [color, setColor] = useState(false);
  return (
    <>
      <Button primary={color} onClick={() => setColor(!color)}>
        Click Me!
      </Button>
    </>
  );
};

export default TestComponent;
