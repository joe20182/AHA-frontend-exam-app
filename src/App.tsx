import {Suspense} from 'react';
import {renderRoutes} from 'react-router-config';
import routes from '@/router';

/**
 * App component
 * @return {React.ReactElement} The app
 */
function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Suspense fallback={<div>Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
