import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// test an async action
//configuring mock store then mock api calls
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Action", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  describe("Load Courses Thunk", () => {
    it("should create Begin Api Call and Load Courses Success when loading courses", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });
      const expectedAction = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses: courses },
      ];
      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});

describe("create course Success", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    const course = courses[0];
    // mocking object
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course: course,
    };
    //action
    const action = courseActions.createCourseSuccess(course);
    // assert
    expect(action).toEqual(expectedAction);
  });
});
