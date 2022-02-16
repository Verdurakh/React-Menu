import React from 'react';
import './App.css';
import { menuData, loading, loadedMenu } from './menuData'
import { MenuItem, getChildren } from './components/MenuItem';
import Accordion from 'react-bootstrap/Accordion'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Menu from './models/Menu';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuCreation />
    </QueryClientProvider>
  )
}

function MenuCreation() {



  const { isLoading, error, data } = useQuery<boolean, Error, Menu[]>('repoData', () =>
    fetch('https://run.mocky.io/v3/d542c15d-02d3-490e-9d57-97180d1ef8c6').then(res =>
      res.json()
    ).then(result => {
      return result.data;
    })
  )

  if (isLoading) return (<div>Loading</div>)

  if (error)
    return (<div> An error has occured  {error.message} </div>)


  return (
    <div>
      <Accordion className='Menu' alwaysOpen={true} defaultActiveKey={"Some node 1.3.1"}>
        <MenuItem menu={getChildren(data)} />
      </Accordion>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </div>
  );
}


export default App;
