import React, { Component } from "react";
import Navigator from "../../HOC/navigator";
import styles from "./StudentRecord.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as actions from "../../actions";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

class StudentRecord extends Component {
  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const pathName = this.props.location.pathname;
    return (
      <Navigator pathname={pathName}>
        <div className={styles.container}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="justify">Student ID</TableCell>
                  <TableCell align="justify">Name</TableCell>
                  <TableCell align="justify">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.students ? (
                  this.props.students.students.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="justify">{row.studentId}</TableCell>
                      <TableCell align="justify">{row.name}</TableCell>
                      <TableCell align="justify">{row.email}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <div>NoStudents</div>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Navigator>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.students,
  };
}
export default connect(mapStateToProps, actions)(StudentRecord);
