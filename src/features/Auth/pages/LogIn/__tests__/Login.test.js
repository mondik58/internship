import {screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import {server} from 'utils/tests/server';
import {signInError} from "utils/tests/requestHandlers";
import {setToken} from 'utils/cookies';
import renderComponent from 'utils/tests/renderComponent';
import {ROUTES} from 'constants/routes';
import Login from '..';

jest.mock('utils/cookies', () => ({
  setToken: jest.fn(),
  getToken: jest.fn()
}));

describe('Login', () => {
  const render = () => renderComponent(<Login />);
  const navigate = jest.fn();

  describe('when user is logging in', () => {
    it('redirects to home page', async () => {
      useNavigate.mockReturnValue(navigate);
      render();

      userEvent.type(screen.getByTestId('email'), 'mondik58@gmail.com');
      userEvent.type(screen.getByTestId('password'), 'As123!');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(setToken).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(ROUTES.HOME);
      });
    });
  });

  describe('with empty fields', () => {
    it('renders correct errors', async () => {
      render();

      userEvent.click(screen.getByTestId('submit'));
      
      await waitFor(() => {
        expect(screen.getByText('Required')).toBeInTheDocument();
      })

      await waitFor(() => {
        expect(screen.getByText('Password is required')).toBeInTheDocument();
      })
    });
  });

  describe('with invalid credentials', () => {
    it('renders correct errors', async () => {
      server.use(signInError);
      render();

      userEvent.type(screen.getByTestId('email'), 'mondik58@gmail.com');
      userEvent.type(screen.getByTestId('password'), 'As123!');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('[GraphQL] Wrong email or password')).toBeInTheDocument()
      })
    });
  });

  describe('with invalid email', () => {
    it('renders correct errors', async () => {
      render();

      userEvent.type(screen.getByTestId('email'), 'gmail');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('Please enter the valid email')).toBeInTheDocument()
      })
    });
  });
});
