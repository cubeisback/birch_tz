import './App.css';
import {Layout} from 'antd';
import Search from 'antd/es/transfer/search';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import { NotesProvider } from './providers/NotesProvider';
import { ActiveNoteProvider } from './providers/ActiveNoteProvider';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('')
  return (
    
    <NotesProvider>
    
    <Layout>
      <Layout.Header>
        <Search value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Поиск" 
        />
      </Layout.Header>
      <Layout>
      <ActiveNoteProvider>
        <Sidebar />
        <Content query={query} setQuery={setQuery} />
        </ActiveNoteProvider>
      </Layout>
    </Layout>

    </NotesProvider>
      
  );
}

export default App;
