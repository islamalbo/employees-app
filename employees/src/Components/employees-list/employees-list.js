import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'
const EmployeesList = ({data}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;








    // data.forEach((item) => {
    //   if (item.increase) {
    //     item.className.add = 
    //   }
    // });