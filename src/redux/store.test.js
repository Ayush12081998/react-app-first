import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("should handle creating courses", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "clean code",
  };
  const course1 = {
    title: "clean code1",
  };
  //   action
  const action = courseActions.createCourseSuccess(course);
  const action1 = courseActions.createCourseSuccess(course1);
  store.dispatch(action);
  store.dispatch(action1);
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
  expect(store.getState().courses.length).toEqual(2);
});

it("should handle load courses", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "clean code",
  };
  const course1 = {
    title: "clean code1",
  };
  const courses = [course, course1];

  //   action
  const action = courseActions.loadCourseSuccess(courses);
  store.dispatch(action);
  //   assertions
  const createdCourses = store.getState().courses;
  expect(createdCourses).toEqual(courses);
  expect(createdCourses.length).toEqual(courses.length);
});

it("should handle updating courses", () => {
  const store = createStore(rootReducer, initialState);
  const course = {
    id: 1,
    title: "clean code",
  };
  const course1 = {
    id: 2,
    title: "clean code1",
  };
  const courseToUpdate = {
    id: 2,
    title: "Amar Ujala",
  };
  //   action
  const action = courseActions.createCourseSuccess(course);
  const action1 = courseActions.createCourseSuccess(course1);
  const updateAction = courseActions.updateCourseSuccess(courseToUpdate);
  store.dispatch(action);
  store.dispatch(action1);
  store.dispatch(updateAction);
  const updatededCourse = store
    .getState()
    .courses.find((a) => a.id == courseToUpdate.id);
  expect(updatededCourse.title).toEqual(courseToUpdate.title);
  //   expect(store.getState().courses.length).toEqual(2);
});
