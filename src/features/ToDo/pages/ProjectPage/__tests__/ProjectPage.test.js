import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useNavigate} from 'react-router-dom';

import renderComponent from 'utils/tests/renderComponent';
import ProjectPage from '..';

describe('ProjectPage', () => {
  const render = () => renderComponent(<ProjectPage />);
  const navigate = jest.fn();

  describe('with data', () => {
    it('should render project title and project description', async () => {
      render();

      await waitFor(() => {
        expect(screen.getByText('test title')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.getByText('test description')).toBeInTheDocument();
      })
    });
  });

  describe('when user clicks on go back button', () => {
    it('redirects to home page', async () => {
      useNavigate.mockReturnValue(navigate);
      render();

      userEvent.click(screen.getByTestId('back-button'));

      await waitFor(() => {
        expect(navigate).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(navigate).toBeCalledWith(-1);
      });
    });
  })

  describe('with task content', () => {
    it('should render task content', async () => {
      render();

      await waitFor(() => {
        expect(screen.getByText(/test content/i)).toBeInTheDocument();
      })
    });
  });
});
