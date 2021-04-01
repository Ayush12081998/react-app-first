import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
it("should add new core to state when Passed CREATE_COURSE SUCCESS", () => {
  const initialState = [{ title: "A" }, { title: "B" }];
  const newCourse = {
    title: "C",
  };
  const action = actions.createCourseSuccess(newCourse);
  const newState = courseReducer(initialState, action);
  expect(newState.length).toEqual(3);
});

it("should add new core to state when Passed UPDATE_COURSE SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];
  const newCourse = { id: 3, title: "New Title" };
  const action = actions.updateCourseSuccess(newCourse);
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((a) => a.id == newCourse.id);
  expect(newState.length).toEqual(3);
  console.log(newState);
  expect(updatedCourse.title).toEqual("New Title");
});

it("should load courses to state when Passed LOAD_COURSES_SUCCESS", () => {
  const initialState = [];
  const courses = [{ title: "A" }, { title: "B" }];
  const action = actions.loadCourseSuccess(courses);
  const newState = courseReducer(initialState, action);
  expect(newState.length).toEqual(2);
});
