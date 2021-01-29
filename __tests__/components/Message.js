import React from 'react';

// https://github.com/mui-org/material-ui/issues/10679
// import renderer from 'react-test-renderer';

import { render, queryByAttribute, fireEvent } from '@testing-library/react'

// https://github.com/testing-library/react-testing-library/issues/379
import "@testing-library/jest-dom/extend-expect";

import Message from '../../src/components/Message';

describe('Component: <Message />', () => {
  const mockCloseMessage = jest.fn()
  const messageTypes = ['error', 'warning', 'info', 'success']
  for (const type of messageTypes) {
    test(`<Message /> Shoud show ${type} message.`, () => {
      const message = `I'm ${type} type message.`
      const dom = render(<Message opemMessage={true} closeMessage={mockCloseMessage} messageType={type} message={message}/>);
      expect(dom.container).toContain(message)
    })
  }
})
