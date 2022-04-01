import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderComponent from 'utils/tests/renderComponent';
import AddTaskButton from '..';

describe('AddTaskButton', () => {
  const render = () => renderComponent(<AddTaskButton />);

  describe('with valid data', () => {
    it('close modal with correct params', async () => {
      render();

      userEvent.click(screen.getByTestId('add-task'));
      userEvent.type(screen.getByTestId('content'), 'tests');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.queryByTestId('create-task')).toBeNull();
      }, {timeout: 3000})
    });
  })

  describe('with invalid data', () => {
    describe('with short content', () => {
      it('renders correct errors', async () => {
        render();

        userEvent.click(screen.getByTestId('add-task'));
        userEvent.type(screen.getByTestId('content'), 'test');
        userEvent.click(screen.getByTestId('submit'));

        await waitFor(() => {
          expect(screen.getByText('Description can\'t be less than 5 characters')).toBeInTheDocument();
        })
      });
    });

    describe('with empty fields', () => {
      it('renders correct errors', async () => {
        render();

        userEvent.click(screen.getByTestId('add-task'));
        userEvent.click(screen.getByTestId('submit'));

        await waitFor(() => {
          expect(screen.getByText('Required')).toBeInTheDocument();
        })
      });
    });
  })
});
