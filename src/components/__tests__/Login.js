import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

test('Component: Login', () => {
  const login = () =>({})
  const component = renderer.create(<Login loading={false} login={login} />).toJSON();
  expect(component).toMatchSnapshot();
})
