import React from 'react'
import Main from '../component/Main'
import Row from '../component/row'
import requests from '../requests'
const home = () => {
  return (
    <>
    <Main/>
    <Row  rowId="1" title='upComing' fetchURL={requests.requestUpcoming}/>
    <Row  rowId="2" title='Popular' fetchURL={requests.requestPopular}/>
    <Row  rowId="3" title='trending' fetchURL={requests.requestTrending}/>
    <Row  rowId="4" title='Top Rated' fetchURL={requests.requestTopRated}/>
    <Row  rowId="5" title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default home