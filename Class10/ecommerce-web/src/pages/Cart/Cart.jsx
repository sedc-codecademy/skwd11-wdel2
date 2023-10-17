import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = ({ products, handleRemoveFromCart }) => {
  return (
    // TODO: If there are no products display "No Products Message"
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Remove from cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right" sx={{ display: "flex" }}>
                  <Avatar alt={row.name} src={row.imageUrl} />
                </TableCell>

                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      handleRemoveFromCart(row._id);
                    }}
                  >
                    <DeleteIcon sx={{ color: "#004954" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
