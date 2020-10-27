import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

const ChildInputComponent = forwardRef((props, ref) => {
  const inputRef = useRef();
  // 可以让你在使用ref的时候自定义的暴露给父组件
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
})

// const ChildInput = forwardRef(ChildInputComponent);

function App() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef)
  }, []);
  return (
    <div>
      <ChildInputComponent ref={inputRef} />
    </div>
  );
}

export default App;