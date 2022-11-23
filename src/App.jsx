import './App.css';
import {Layout, Row} from 'antd';
import Search from 'antd/es/transfer/search';
import Sidebar from './components/sidebar/Sidebar';
import Workspace from './components/workspace/Workspace';
import { NotesProvider } from './providers/NotesProvider';
import { ActiveNoteProvider } from './providers/ActiveNoteProvider';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  return (
    <NotesProvider>
    <Layout>
      <Layout.Header className="header">
        <Row className='search'>
            <Search 
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Поиск"
            />
          </Row>
      </Layout.Header>
      <Layout>
      <ActiveNoteProvider>
        <Sidebar query={query}/>
        <Workspace query={query}/>
        </ActiveNoteProvider>
      </Layout>
    </Layout>
    </NotesProvider>
  );
}

export default App;
