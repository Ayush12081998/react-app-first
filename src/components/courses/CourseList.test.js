import React from "react";
import { shallow } from "enzyme";
import { CourseList } from "./CourseList";
import { courses } from "../../../tools/mockData";

function renderCourseList(args) {
  const defaultProps = {
    courses: [],
    onDeleteClick: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseList {...props} />);
}

it("should renders table", () => {
  const wrapper = renderCourseList();
  expect(wrapper.find("table").length).toBe(1);
});

it("should renders row equal to no of courses", () => {
  const wrapper = renderCourseList({ courses: courses });
  console.log(courses.length);
  expect(wrapper.find("tr").length).toBe(courses.length + 1);
});
