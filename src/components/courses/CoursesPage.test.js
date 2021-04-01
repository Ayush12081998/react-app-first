import React from "react";
import { shallow, mount } from "enzyme";
import { authors, courses } from "../../../tools/mockData";
import { CoursesPage } from "./CoursesPage";
import { MemoryRouter } from "react-router-dom";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    actions: {},
    loading: false,
  };

  const props = { ...defaultProps, ...args };

  return shallow(<CoursesPage {...props} />);
}

it("testing courseList to be render when loading is false", () => {
  const wrapper = render();
  expect(wrapper.find("CourseList").length).toBe(1);
});

it("testing Spinner to be render when loading is true", () => {
  const wrapper = render({ loading: true });
  expect(wrapper.find("Spinner").length).toBe(1);
});

function renderViaMount(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    actions: {},
    loading: false,
  };

  const props = { ...defaultProps, ...args };

  return mount(
    <MemoryRouter>
      <CoursesPage {...props} />
    </MemoryRouter>
  );
}
it("shoul have inner form to edit course via mount", () => {
  const numAnchors = renderViaMount().find("table").length;
  expect(numAnchors).toEqual(1);
});
