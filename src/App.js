import React from 'react';
import './App.css';
import { 
  BarChart, 
  DoughnutChart, 
  LineChart, 
  ColorPicker,  
  CountingUp, 
  CreditCard, 
  DatePickerContainer,
  Icons,
  IdleTimerContainer,
  Modals,
  Notify,
  Spinner,
  ToolTips,
  Player
} from './Components';

function App() {
  return (
    <div className="App">
      <Icons />,
      <Notify />,
      <Modals />,
      <ToolTips />,
      <CountingUp />,
      <IdleTimerContainer />,
      <ColorPicker />,
      <CreditCard />,
      <DatePickerContainer />,
      <Player />,
      <Spinner />,
      <LineChart/>,
      <BarChart />,
      <DoughnutChart />
    </div>
  );
}

export default App;
