import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useNavigate} from 'react-router-dom';

import {server} from 'utils/tests/server';
import {signUpError} from 'utils/tests/requestHandlers';
import renderComponent from 'utils/tests/renderComponent';
import {ROUTES} from 'constants/routes';
import SignUp from '..';

describe('SignUp', () => {
  const render = () => renderComponent(<SignUp />);
  const navigate = jest.fn();

  describe('with valid data', () => {  
    it('redirects to login page', async () => {
      useNavigate.mockReturnValue(navigate);
      render();
      
      userEvent.type(screen.getByTestId('firstName'), 'test');
      userEvent.type(screen.getByTestId('lastName'), 'test');
      userEvent.type(screen.getByTestId('email'), 'mondik58@gmail.com');
      userEvent.type(screen.getByTestId('password'), 'As123!');

      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(ROUTES.LOGIN);
      });
    });
  })

  describe('with invalid data', () => {
    it('renders correct errors', async () => {
      server.use(signUpError);
      render();

      userEvent.type(screen.getByTestId('firstName'), 'test');
      userEvent.type(screen.getByTestId('lastName'), 'test');
      userEvent.type(screen.getByTestId('email'), 'mondik58@gmail.com');
      userEvent.type(screen.getByTestId('password'), 'As123!');

      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('[GraphQL] Email has already been taken')).toBeInTheDocument()
      })
    });
  });

  describe('with empty fields', () => {
    it('renders correct errors', async () => {
      render();

      userEvent.type(screen.getByTestId('firstName'), '');
      userEvent.type(screen.getByTestId('lastName'), '');
      userEvent.type(screen.getByTestId('email'), '');
      userEvent.type(screen.getByTestId('password'), '');

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
    it('renders correct errors', async () => {
      render();

      userEvent.type(screen.getByTestId('email'), 'gmail');
      userEvent.click(screen.getByTestId('submit'));

      await waitFor(() => {
        expect(screen.getByText('Invalid email, example@gmail.com')).toBeInTheDocument()
      })
    });
  });

  describe('with invalid password', () => {
    describe('when password is too short', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.type(screen.getByTestId('password'), 'p111');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText('Your password must be longer than 6 characters.')).toBeInTheDocument()
        })
      });
    });
    
    describe('when password is not strong', () => {
      it('renders correct errors', async () => {
        render();
  
        userEvent.type(screen.getByTestId('password'), 'ass123!');
        userEvent.click(screen.getByTestId('submit'));
  
        await waitFor(() => {
          expect(screen.getByText('Password must contain at least 6 characters, one uppercase, one number and one special case character')).toBeInTheDocument()
        })
      });
    });
  });
});
