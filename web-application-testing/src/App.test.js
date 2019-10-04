import React from 'react';
// import ReactDOM from 'react-dom';
import App, { addStrike } from './App';
import { render, cleanup } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
// import TestRunner from 'jest-runner';
// import { TestScheduler } from '@jest/core';
// import { exportAllDeclaration } from '@babel/types';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

afterEach(cleanup);

test('renders without crashing', () => {
  render(<App />);
});

test('ballChange add 1 point to the current count', () => {
  expect(addStrike(1)).toBe(1);
})