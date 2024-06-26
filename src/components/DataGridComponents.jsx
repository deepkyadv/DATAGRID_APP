import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField } from '@mui/material';

// Combined Sample JSON data
const rows = [
  { id: 1, name: "Deepak", email: "dpk@gmail.com", lastSeen: "21/05/2024", orders: 2, totalSpent: "2100 $US", latestPurchases: "21/05/2024 13:12:25", news: false, segments: "regular" },
  { id: 2, name: "Pawan", email: "pwn@gmail.com", lastSeen: "20/06/2024", orders: 3, totalSpent: "1100 $US", latestPurchases: "23/06/2024 13:12:25", news: false, segments: "regular" },
  { id: 3, name: "Dinesh", email: "dnsh@gmail.com", lastSeen: "21/05/2024", orders: 6, totalSpent: "2100 $US", latestPurchases: "22/04/2024 13:12:25", news: true, segments: "regular" },
  { id: 4, name: "Gulshan", email: "glshn@gmail.com", lastSeen: "02/03/2024", orders: 0, totalSpent: "200 $US", latestPurchases: "24/01/2024 13:12:25", news: true, segments: "regular" },
  { id: 5, name: "Kapil", email: "kpl@gmail.com", lastSeen: "21/05/2024", orders: 0, totalSpent: "700 $US", latestPurchases: "28/06/2024 13:12:25", news: true, segments: "regular" },
  { id: 6, name: "Nanuram", email: "nnrm@gmail.com", lastSeen: "14/04/2024", orders: 1, totalSpent: "2100 $US", latestPurchases: "29/05/2024 13:12:25", news: true, segments: "regular" },
  { id: 7, name: "Tanisha", email: "tnsh@gmail.com", lastSeen: "24/02/2024", orders: 2, totalSpent: "5100 $US", latestPurchases: "27/04/2024 13:12:25", news: false, segments: "regular" },
  { id: 8, name: "Amit", email: "amt@gmail.com", lastSeen: "04/06/2024", orders: 3, totalSpent: "2100 $US", latestPurchases: "24/03/2024 13:12:25", news: true, segments: "regular" },
  { id: 9, name: "Santosh", email: "sonu@gmail.com", lastSeen: "01/02/2024", orders: 2, totalSpent: "1900 $US", latestPurchases: "22/02/2024 13:12:25", news: false, segments: "regular" },
  { id: 10, name: "Sanvi", email: "sanu@gmail.com", lastSeen: "28/03/2023", orders: 3, totalSpent: "2100 $US", latestPurchases: "20/01/2024 13:12:25", news: false, segments: "regular" },
  // Add more rows as needed...
];

const columns = [
  { field: 'name', headerName: 'Customer', width: 200 },
  { field: 'lastSeen', headerName: 'Last Seen', width: 150 },
  { field: 'orders', headerName: 'Orders', width: 100 },
  { field: 'totalSpent', headerName: 'Total Spent', width: 150 },
  { field: 'latestPurchases', headerName: 'Latest Purchase', width: 200 },
  { field: 'news', headerName: 'News', width: 100, type: 'boolean' },
  { field: 'segments', headerName: 'Segments', width: 150 },
];

const DataGridComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);

    const filtered = rows.filter(row => 
      row.name.toLowerCase().includes(value) ||
      row.email.toLowerCase().includes(value) ||
      row.lastSeen.toLowerCase().includes(value) ||
      row.totalSpent.toLowerCase().includes(value) ||
      row.latestPurchases.toLowerCase().includes(value) ||
      row.segments.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  return (
    <Box>
      <TextField
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Box>
  );
};

export default DataGridComponent;
