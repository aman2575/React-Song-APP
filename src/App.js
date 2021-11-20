import './App.css';
import Amplify from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import react from 'react';

Amplify.configure(awsconfig);


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
        <h1>Hello New Saturaday</h1>
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
