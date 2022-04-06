import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useNavigate} from 'react-router-dom';

import renderComponent from 'utils/tests/renderComponent';
import {ROUTES} from 'constants/routes';
import DeleteProjectButton from '..';

describe('DeleteProjectButton', () => {
  const render = () => renderComponent(<DeleteProjectButton />);
  const navigate = jest.fn();

  describe('when user click on delete project button', () => {
    it('redirects to home page', async () => {
      useNavigate.mockReturnValue(navigate);
      render();

      userEvent.click(screen.getByTestId('delete-project'));

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(ROUTES.HOME);
      });
    });
  })
});
