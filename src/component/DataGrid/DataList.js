import React, { useState, useCallback } from 'react';
//import CustomToolbar from './CustomToolba';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';

const toArray = selected => Object.keys(selected).map(id => id * 1);

const filterValue = [
    { name: 'firstName', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'eq', type: 'number', value: null },
    { name: 'email', operator: 'startsWith', type: 'string', value: '' },
    { name: 'phone', operator: 'eq', type: 'number', value: null },
    { name: 'city', operator: 'startsWith', type: 'string', value: '' },
    { name: 'streetName', operator: 'startsWith', type: 'string', value: '' },
    { name: 'streetNo', operator: 'eq', type: 'number', value: null },
]
const columns = [
    { name: 'id', header: 'Id', type: 'number', defaultWidth: 50 },
    { name: 'firstName', header: 'First Name' },
    { name: 'age', header: 'Age', type: 'number', filterEditor: NumberFilter },
    { name: 'email', header: 'Email' },
    { name: 'phone', header: 'Phone' },
    { name: 'city', header: 'City' },
    { name: 'streetName', header: 'Street name', minWidth: 150 },
    { name: 'streetNo', header: 'Street no', type: 'number' }
]

const dataSource = [
    { id: 0, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 1, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 2, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 3, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 4, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 },
    { id: 6, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 7, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 8, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 9, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 10, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 },
    { id: 11, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 12, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 13, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 14, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 15, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 },
    { id: 16, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 17, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 18, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 19, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 20, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 },
    { id: 21, firstName: 'Bob', age: 25, email: 'bobby@whocares.com', phone: '+7403 456 768', city: 'Paris', streetName: 'Champs Elysee', streetNo: 34 },
    { id: 22, firstName: 'Lynda', age: 38, email: 'lynda@idont.com', phone: '+7103 66 98 768', city: 'London', streetName: 'St Mary', streetNo: 14 },
    { id: 23, firstName: 'Richard', age: 18, email: 'richy@rich.com', phone: '+173 668 08 83', city: 'Manchester', streetName: 'St Robert', streetNo: 53 },
    { id: 24, firstName: 'Michael', age: 45, email: 'mike@mikey.com', phone: '+075 0628 156 74', city: 'Los Angeles', streetName: 'Greenfield', streetNo: 24 },
    { id: 25, firstName: 'Martin', age: 12, email: 'martin@bobson.com', phone: '+173 5624 675 462', city: 'San Jose', streetName: 'Patrick Ball', streetNo: 67 },
]
const gridStyle = { minHeight: 450 }

const DataList = () => {

    const [autoHide, setAutoHide] = useState(true);

    const scrollProps = Object.assign({}, ReactDataGrid.defaultProps.scrollProps, {
        autoHide: autoHide
    })

    const [selected, setSelected] = useState({});

    const onSelectionChange = useCallback(({ selected }) => {
        setSelected(selected)
    }, [])
    return (
        <>
            <ReactDataGrid
                idProperty="id"
                style={gridStyle}
                columnMinWidth={100}
                columns={columns}
                dataSource={dataSource}
                defaultFilterValue={filterValue}
                checkboxColumn
                onSelectionChange={onSelectionChange}
                pagination
                defaultLimit={10}
                scrollProps={scrollProps}
                // toolbar={<CustomToolbar 
                //     onAddRow={this.handleAddRow.bind(this)}
                //     onDeleteRow={this.handleDeleteRow.bind(this)}
                //     deleteRowButtonText="Delete Selected">
                //     </CustomToolbar>}
            />
            <p>Selected rows: {JSON.stringify(toArray(selected))}.</p>
        </>
    );
}
export default DataList;
