import {screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import renderComponent from 'utils/tests/renderComponent';
import EditList from '..';

describe('EditList', () => {
  const render = () => renderComponent(<EditList />);

  describe('with valid data', () => {
    it('close modal', async () => {
      render();
      
      userEvent.click(screen.getByTestId('open-edit-list'));
      userEvent.type(screen.getByTestId('title'), 'tests title');
      userEvent.type(screen.getByTestId('description'), 'tests description');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.queryByTestId('update-list')).toBeNull();
      }, {timeout: 3000})
    });
  })

  describe('with invalid data', () => {
    describe('with short title', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-edit-list'));
        userEvent.type(screen.getByTestId('title'), 'test');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText("Title can't be less than 5 characters")).toBeInTheDocument();
        });
      });
    });

    describe('with empty fields', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-edit-list'));
        userEvent.type(screen.getByTestId('title'), '');
        userEvent.click(screen.getByTestId('submit'));

        await waitFor(() => {
          expect(screen.getByText('Enter title')).toBeInTheDocument();
        })
      });
    });

    describe('with short description', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.click(screen.getByTestId('open-edit-list'));
        userEvent.type(screen.getByTestId('description'), 'test');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText("Description can't be less than 5 characters")).toBeInTheDocument();
        });
      });
    });
  })
});
