import {Suspense} from 'react';
import {renderRoutes} from 'react-router-config';
import routes from '@/router';
import Layout from '@/layout';

/**
 * App component
 * @return {React.FunctionComponent} The app
 */
function App() {
  return (
    <Layout>
      {/* <div className="App">
      <div className="page-wrapper"> */}
      <Suspense fallback={<div>Loading</div>}>{renderRoutes(routes)}</Suspense>
      {/* </div>
    </div> */}
    </Layout>
  );
}

export default App;
