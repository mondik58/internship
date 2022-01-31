import {screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {useNavigate} from "react-router-dom";

import {server} from 'utils/tests/server';
import {signUpError} from "utils/tests/requestHandlers";
import renderComponent from 'utils/tests/renderComponent';
import {ROUTES} from 'constants/api';
import SignUp from '..';

describe('SignUp', () => {
  const render = () => renderComponent(<SignUp />);
  const navigate = jest.fn();

  describe('navigate to login', () => {  
    it('when valid data redirect to login page', async () => {
      useNavigate.mockReturnValue(navigate);
      render();
      
      userEvent.type(screen.getByLabelText(/first name/i), 'test');
      userEvent.type(screen.getByLabelText(/last name/i), 'test');
      userEvent.type(screen.getByLabelText(/email/i), 'mondik58@gmail.com');
      userEvent.type(screen.getByLabelText(/password/i), 'As123!');

      userEvent.click(screen.getByTestId('submit'));

      expect(screen.getByRole('button')).not.toBeDisabled()

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(ROUTES.LOGIN);
      });
    });
  })

  describe('fail request', () => {
    it('when request is failed', async () => {
      server.use(signUpError);
      render();

      userEvent.type(screen.getByLabelText(/first name/i), 'test');
      userEvent.type(screen.getByLabelText(/last name/i), 'test');
      userEvent.type(screen.getByLabelText(/email/i), 'mondik58@gmail.com');
      userEvent.type(screen.getByLabelText(/password/i), 'As123!');

      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('[GraphQL] Email has already been taken')).toBeInTheDocument()
      })
    });
  });

  describe('submit with empty inputs', () => {
    it('when empty inputs', async () => {
      render();

      userEvent.type(screen.getByLabelText(/first name/i), '');
      userEvent.type(screen.getByLabelText(/last name/i), '');
      userEvent.type(screen.getByLabelText(/email/i), '');
      userEvent.type(screen.getByLabelText(/password/i), '');

      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('First name is required')).toBeInTheDocument()
      });

      await waitFor(() => {
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
      })

      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
      })

      await waitFor(() => {
        expect(screen.getByText('Password is required')).toBeInTheDocument();
      })
    });
  });

  describe('with invalid email', () => {
    it('when invalid email', async () => {
      render();

      userEvent.type(screen.getByLabelText(/email/i), 'gmail');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('Invalid email, example@gmail.com')).toBeInTheDocument()
      })
    });
  });

  describe('with invalid password', () => {
    it('when password less then 6 characters', async () => {
      render();

      userEvent.type(screen.getByLabelText(/password/i), 'p111');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('Your password must be longer than 6 characters.')).toBeInTheDocument()
      })
    });

    it('when password incorrect', async () => {
      render();

      userEvent.type(screen.getByLabelText(/password/i), 'ass123!');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('Password must contain at least 6 characters, one uppercase, one number and one special case character')).toBeInTheDocument()
      })
    });
  });
});
