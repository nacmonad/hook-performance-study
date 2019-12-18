import React from 'react';

export default (props)=> {
  const {setShowHookful, setHookfulResult} = props;
  const [count, setCount] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  React.useEffect(()=>{
    console.log("HELLO HOOKFUL");
    setCount(1)
    setStartTime(new Date())
    return ()=>{
      console.log("GOODBYE HOOKFUL")
    }
  }, [])

  React.useEffect(()=>{
    //do something in response to count increment
    if(count <= 25) {
      console.log("UPDATE HOOKFUL")
      setCount(count+1)
    } else {
      setEndTime(new Date())
      setShowHookful(false);
      setHookfulResult({
        count,
        startTime,
        endTime: new Date()
      })
    }
  }, [count])

  return (
    <div>
      <h2>HOOKFUL: {count}</h2>
    </div>
  )
}
