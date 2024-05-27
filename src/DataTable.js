import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com', city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'asif ali', age: 35, email: 'asiflayyah1@gmail.com', city: 'layyah' },
  { id: 2, name: 'asif ali', age: 35, email: 'asiflayyah1@gmail.com', city: 'layyah' },
  { id: 2, name: 'asif ali', age: 35, email: 'asiflayyah1@gmail.com', city: 'layyah' },
  { id: 2, name: 'asif ali', age: 35, email: 'asiflayyah1@gmail.com', city: 'layyah' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'tayyab sb', age: 45, email: 'tayyab@example.com', city: 'karor' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', city: 'Los Angeles' },
  { id: 2, name: 'muneeb khan', age: 65, email: 'munneb@example.com', city: 'kot adu' },
  // Add more dummy data entries as needed
];

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ marginBottom: '16px' }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
