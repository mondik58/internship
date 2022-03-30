
import {screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import renderComponent from 'utils/tests/renderComponent';
import ToDoList from '..';

describe('ToDoList', () => {
  const list = {
    title: 'test title',
    id: 1,
  }
  const render = () => renderComponent(<ToDoList list={list} />);

  describe('renders with title', () => {
    it('renders correct title', () => {
      render();
      expect(screen.getByText(/test title/i)).toBeInTheDocument();
    });
  })
});
