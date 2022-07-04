import { useLayoutEffect, useRef, useState } from "react";

export const QuoteBody = ({author, quote}) => {

  const pRef = useRef();
  const [state, setState] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setState({
      width,
      height
    })
  
    
  }, [])


  return (
    <>
      <blockquote className="blockquote text-end">
      <p ref={pRef} className="mb-2">{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>

    <code>
      {JSON.stringify(state)}
    </code>
    
    </>
  );
};
