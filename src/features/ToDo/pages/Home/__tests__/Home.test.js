import {screen, waitFor} from '@testing-library/react';
import renderComponent from 'utils/tests/renderComponent';
import {server} from 'utils/tests/server';
import {getListsEmpty} from 'utils/tests/requestHandlers';
import Home from '..';

describe('Home', () => {
  const render = () => renderComponent(<Home />);

  describe('with data', () => {
    it('should render lists', async () => {
      render();

      await waitFor(() => {
        expect(screen.getByText('test title')).toBeInTheDocument();
      })
    });
  });

  describe('with empty data', () => {
    it('should render correct text', async () => {
      server.use(getListsEmpty);
      render();

      await waitFor(() => {
        expect(screen.getByText('You don\'t have any lists yet')).toBeInTheDocument();
      })
    });
  });

  describe('with task content', () => {
    it('should render task content', async () => {
      render();

      await waitFor(() => {
        expect(screen.getByText(/test content/i)).toBeInTheDocument();
      })
    });
  });
});
