import React from "react";
import users from "../adminUtils/userlistAdmin";
import "../adminCss/usermanagement.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "Id", label: "Id", minWidth: 170 },
  { id: "Name", label: "Name", minWidth: 170 },
  { id: "Gender", label: "Gender", minWidth: 100 },
  { id: "Educationlevel", label: "Educationlevel", minWidth: 100 },
  { id: "Role", label: "Role", minWidth: 100 },
  { id: "Action", label: "Action", minWidth: 100 },
  { id: "RegistrationDate", label: "RegistrationDate", minWidth: 100 },
  { id: "Email", label: "Email", minWidth: 100 }
];

function createData(
  Id,
  Name,
  Gender,
  Educationlevel,
  Role,
  Action,
  RegistrationDate,
  Email
) {
  return {
    Id,
    Name,
    Gender,
    Educationlevel,
    Role,
    Action,
    RegistrationDate,
    Email
  };
}
const rows = [];
users.map(c => {
  return rows.push(
    createData(
      c.Id,
      c.Name,
      c.Gender,
      c.Educationlevel,
      c.Role,
      c.Action,
      c.RegistrationDate,
      c.Email
    )
  );
});

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto"
  }
});

export default function ListviewUsermanagment() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 25, { label: "All", value: -1 }]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
