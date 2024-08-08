import logo from './logo.svg';
import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';


function App() {
  let veeresh = new SSCStudent("Veeresh","Male",15);
  let prakash = new SSCStudent("Prakash","Male",15);
  let suresh = new SSCStudent("Suresh","Male");
  let satish = new SSCStudent("Satish","Male",15);
  let kotesh = new SSCStudent();
  kotesh.name = "kotesh";
  kotesh.gender= "Male";
  kotesh.age =15;
  kotesh.calculateResult();
  satish.age=15;

  console.log(satish.age)

    return (
    <div className="App">
      <TenthStudent name="Veeresh"/>
      <TenthStudent name="Prakash"/>
      <TenthStudent name="Suresh"/>
      <TenthStudent name="Satish"/>
      <TenthStudent name="Kotesh"/>

    </div>
  );
}

export default App;
