import React, { Component } from "react";
import Navigator from "../../HOC/navigator";
import styles from "./studentCourses.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import * as actions from "../../actions";

class StudentCourses extends Component {
  componentDidMount() {
    this.props.getCourses(this.props.match.params.studentId);
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
                  <TableCell align="justify">Course Name</TableCell>
                  <TableCell align="justify">Grade</TableCell>
                  <TableCell align="justify">Semester</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.courses ? (
                  this.props.courses.courses.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="justify">{row.name}</TableCell>
                      <TableCell align="justify">{row.grade}</TableCell>
                      <TableCell align="justify">{row.semester}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <div>NoCourses</div>
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
  console.log(state.courses);
  return {
    courses: state.courses,
  };
}
export default connect(mapStateToProps, actions)(StudentCourses);
