import React from 'react';
import { useSelector } from 'react-redux';
import ServiceEditor from './components/ServiceEditor';
import ServiceListViewer from './components/ServiceListViewer';

export default function App() {
  const items = useSelector((store) => store.serviceList.list);

  return (
    <div className='wrapper>'>
      <div className='container'>
        <ServiceEditor />
        {items.length > 0 && <ServiceListViewer />}
      </div>
    </div>
  );
}
