import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// function createData(product, quantity, price, subtotal, deleteProduct) {
//   return { product, quantity, price, subtotal, deleteProduct };
// }

// const rows = [
//   createData('Sweater rojo', 2, `$${256}`, 8, <HighlightOffIcon />),
//   createData('Ice cream sandwich', 237, 9.0, 37, <HighlightOffIcon />),
//   createData('Eclair', 262, 16.0, 24, <HighlightOffIcon />)
// ];

 

export default function BasicTable({setProductsCart, productsCart, total, setTotal}) {
    const rows = productsCart
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Subtotal</TableCell>
            <TableCell align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantityCart}</TableCell>
              <TableCell align="center">{`$ ${row.price}`}</TableCell>
              <TableCell align="center">{`$ ${parseFloat(row.price * row.quantityCart)}`}</TableCell>
              <TableCell align="center">{<HighlightOffIcon />}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            <div>Total= $ {total}</div>
            <button>Vaciar Carrito</button>
    </TableContainer>
  );
}