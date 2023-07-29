// import logo from './logo.svg';
import './App.css';
import HelloHeader from './components/HelloHeader'
import RedHeader from './components/RedHeader'
import BlueHeader from './components/BlueHeader'
import GreenHeader from './components/GreenHeader';
import YellowHeader from './components/YellowHeader';
import ColorChanger from './components/ColorChanger';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const app_name = 'react101'
//   return(
//     <div className='App'>
//       <ColorChanger/>
//       <h1> my first react app </h1>
//       <HelloHeader name='Shoval' age='26' height='1.77' weight='117' hederColor='purple'/>
//       <br/>
//       <RedHeader redHeader='one red header'
//       secondHeader="nice isn't it"/>
//       <BlueHeader />  
//       <RedHeader redHeader='second red header'/>
//       <BlueHeader/>  
//       <GreenHeader greenHeader = 'Are we heving fun yet ?'/>
//       <br/>
//       <YellowHeader name='Amit Shalev' color='yellow'/>
//     </div>
//   )
// }

import MainPage from './Flights_System/MainPage';

const App = () => {
  return (
    <div>
      <MainPage />
    </div>
  );
};
export default App;
