import {render} from '@testing-library/react';
import {createClient, Provider} from 'urql';
import {BrowserRouter} from 'react-router-dom';

import {API_URL} from 'constants/api';

const client = createClient({url: API_URL, requestPolicy: 'network-only'})

const renderComponent = ui => {
  const Wrapper = ({children}) => (
    <BrowserRouter>
      <Provider value={client}>
        {children}
      </Provider>
    </BrowserRouter>
  )

  return render(ui, {wrapper: Wrapper})
}

export default renderComponent;
