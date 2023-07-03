import { useState , useEffect } from 'react'
import {fetchDatafromApi} from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'




function App() {

  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home)

  console.log(url)

  useEffect(()=>{
    apiTest()
  },[])
  
  const apiTest = ()=>{
    fetchDatafromApi('/movie/popular').then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }


  return (
    <>

    {url ?. total_pages}



    </>
  )
}

export default App
