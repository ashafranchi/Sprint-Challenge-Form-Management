import React from 'react';
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from './App';

afterEach(cleanup);

it('it displays header', () => {
  const { getByTestId } = render(<App />);
  const heading = getByTestId("headerTest");
  expect(heading.children.length).toBe(0);  
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "Submit" text', () => {
  const wrapper = render(<App />);
  expect(wrapper.getByText(/Submit/i));
});