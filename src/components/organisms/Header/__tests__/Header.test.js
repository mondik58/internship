import {screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {deleteToken, getToken} from 'utils/cookies';
import {useNavigate} from "react-router-dom";

import renderComponent from 'utils/tests/renderComponent';
import {ROUTES} from 'constants/routes';
import Header from '..';

jest.mock('utils/cookies', () => ({
  getToken: jest.fn(),
  deleteToken: jest.fn()
}));

describe('Header', () => {
  const render = () => renderComponent(<Header />);
  const navigate = jest.fn();
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1NiwiZXhwIjoxNjQ4NTU4NTg2fQ.bsjU5PXXweW-6bwoYYjTsj6DPM6WnwTFmMNMn9JDCzQ';

  describe('without token', () => {
    it('should renders log-in and sign-up buttons', () => {
      render();
      expect(screen.getByTestId('log-in')).toBeInTheDocument();
      expect(screen.getByTestId('sign-up')).toBeInTheDocument();
    });
  });

  describe('with token', () => {
    it('should renders log out button', async () => {
      getToken.mockReturnValue(token);
      render();
      await waitFor(() => {
        expect(screen.getByTestId('log-out')).toBeInTheDocument();
      })
    })
  })

  describe('when clicks log out button', () => {
    it('should delete token and navigate to log in page', async () => {
      getToken.mockReturnValue(token);
      useNavigate.mockReturnValue(navigate);
      render();
      userEvent.click(screen.getByTestId('log-out'))
      
      await waitFor(() => {
        expect(deleteToken).toBeCalledTimes(1);
      })

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(ROUTES.LOGIN);
      });
    })
  })
});
