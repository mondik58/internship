import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderComponent from 'utils/tests/renderComponent';
import ToDoModal from '..';

describe('ToDoModal', () => {
  const render = () => renderComponent(<ToDoModal />);

  describe('with valid data', () => {
    it('close modal with correct params', async () => {
      render();

      userEvent.click(screen.getByTestId('open-modal'));
      userEvent.type(screen.getByTestId('title'), 'test title');
      userEvent.type(screen.getByTestId('description'), 'test description');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.queryByTestId('create-list')).toBeNull();
      }, {timeout: 3000})
    });
  })

  describe('with invalid data', () => {
    describe('with short title', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-modal'));
        userEvent.type(screen.getByTestId('title'), 'test');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText('Title can\'t be less than 5 characters')).toBeInTheDocument();
        })
      });
    });

    describe('with empty fields', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-modal'));
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText('Enter title')).toBeInTheDocument();
        })
      });
    });

    describe('with short description', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-modal'));
        userEvent.type(screen.getByTestId('description'), 'test');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText('Description can\'t be less than 5 characters')).toBeInTheDocument();
        })
      });
    });
  })
});
