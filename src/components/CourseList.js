import React, { Component } from 'react'
import { Route, NavLink } from "react-router-dom";
import CourseItem from './CourseItem'

const courseList = [
  {to:'angular',name:'Angular'},
  {to:'reactjs',name:'Reactjs'},
  {to:'nodejs',name:'Nodejs'}
]

class CourseList extends Component {
  showCourseList=(url,courseList)=>{
    if(courseList.length){
      return courseList.map((courseList,index)=>{
        return (
          <NavLink key={index} to={`${url}/${courseList.to}`} className="list-group-item">{courseList.name}</NavLink>
        )
      })
    }
  }
  render() {
    let { match } = this.props.match;
    return (
      <div >
        <h3>CourseList</h3>
        <div className="list-group">
          {this.showCourseList(match.url,courseList)}
        </div>
        <Route exact path={match.url} render={() => (
           <h4>Please select course</h4>
        )} />
         <Route exact  path={`${match.url}/:name`} component={CourseItem}/>
      </div>
    );
  }
}

export default CourseList;
