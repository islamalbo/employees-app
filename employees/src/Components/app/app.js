import AppInfo from '../app-info/app-info';
import SeacrhPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    
    const data = [
      {
        name: "John Smith",
        salary: 800,
        increase: false,
        id: 1
      },
      {
        name: "Alex Stormy",
        salary: 1500,
        increase: true,
        id: 2
      },
      {
        name: "Samanta Ocean",
        salary: 500,
        increase: false,
        id: 3
      },
      {
        name: "Samanta Ocean",
        salary: 3800,
        increase: true,
        id: 4
      },
    ];

    data.forEach((item) => {
        if(item.increase){
            
        }
    });

    return (
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <SeacrhPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>

        
    )
}

export default App;