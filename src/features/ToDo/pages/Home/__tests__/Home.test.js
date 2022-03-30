import {screen, waitFor} from "@testing-library/react";
import renderComponent from 'utils/tests/renderComponent';
import {server} from "utils/tests/server";
import {emptyDataLists} from "utils/tests/requestHandlers";
import Home from '..';


describe('Home', () => {
  const render = () => renderComponent(<Home />);

  describe('with data', () => {
    it('should renders lists', async () => {
      render();

      await waitFor(() => {
        expect(screen.getByText('test title')).toBeInTheDocument();
      })
    });
  });

  describe('with empty data', () => {
    it('should renders correct text', async () => {
      server.use(emptyDataLists);
      render();

      await waitFor(() => {
        expect(screen.getByText("You don't have any lists yet")).toBeInTheDocument();
      })
    });
  });
});
