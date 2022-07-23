import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getGreeting} from '../redux/greetings/greetings'

function HelloWorld() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const greeting = useSelector((state) => state.greeting);
  const fetching = useSelector((state) => state.fetching);
  return (
    <React.Fragment>

      {!fetching  && (
        <h3>Greeting: {greeting}</h3>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </React.Fragment>
  );
}
export default HelloWorld
