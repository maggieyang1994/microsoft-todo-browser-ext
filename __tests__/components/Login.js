import React from 'react';
import renderer from 'react-test-renderer';
import { render, queryByAttribute, fireEvent } from '@testing-library/react'
import Login from '../../src/components/Login';


describe('Component: <Login />', () => {
  test('<Login /> Shoud show login button', () => {
    const mockLogin = jest.fn()
    const component = renderer.create(<Login loading={false} login={mockLogin} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('<Login /> Shoud show loading buttong when loading is true', () => {
    const mockLogin = jest.fn()
    const component = renderer.create(<Login loading={true} login={mockLogin} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('<Login /> Click login button shoud call login props', () => {
    const mockLogin = jest.fn()
    const dom = render(<Login loading={false} login={mockLogin}></Login>)
    const loginBtn = queryByAttribute('id', dom.container, 'login-btn')
    fireEvent.click(loginBtn)
    expect(mockLogin.mock.calls.length).toBe(1)
  })

  test(`<Login /> When loading state can't click login button`, () => {
    const mockLogin = jest.fn()
    const dom = render(<Login loading={true} login={mockLogin}></Login>)
    const loginBtn = queryByAttribute('id', dom.container, 'login-btn')
    fireEvent.click(loginBtn)
    expect(mockLogin.mock.calls.length).toBe(0)
  })
})
