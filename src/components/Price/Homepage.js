import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Layout from '../Layout';

const HomePageComponent = () => {
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
        const socket = socketIOClient('http://localhost:3003', { transports: ['websocket'] });

        socket.on('connect', () => {
            console.log('Connected to server');
        });

        // Listen for data updates from the server
        socket.on('updateData', (newData) => {
            setRowData(newData);
        });

        return () => socket.disconnect(); // Clean up on unmount
    }, []);

    const columnDefs = [
        { headerName: 'ID', field: 'id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Age', field: 'age' }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
           
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
            />
        </div>
    );
};

export default HomePageComponent;