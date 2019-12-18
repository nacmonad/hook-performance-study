import React, {useRef} from 'react';
import Stateful from './components/Stateful'
import Hookful from './components/Hookful';

const styles = () => ({
    root:{
      backgroundColor:'black',
      color:'chartreuse'
    },
    row: {
      display:'flex',
      flexDirection:'row'
    }
})

function App() {
  const [showStateful, setShowStateful] = React.useState(true)
  const [showHookful, setShowHookful] = React.useState(true)
  const [statefulResult, setStatefulResult] = React.useState(null)
  const [hookfulResult, setHookfulResult] = React.useState(null)
  return (
    <div className="App" style={styles.root}>
      <div style={styles.row}>
        {showStateful && <Stateful setStatefulResult={setStatefulResult} setShowStateful={setShowStateful}/>}
        {showHookful && <Hookful setHookfulResult={setHookfulResult} setShowHookful={setShowHookful}/>}
        {statefulResult && statefulResult.endTime.getTime()-statefulResult.startTime.getTime() + '\n'}
        {hookfulResult && hookfulResult.endTime.getTime()-hookfulResult.startTime.getTime()}
      </div>
    </div>
  );
}

export default App;
