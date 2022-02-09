import React from 'react';
import CardList from './components/CardList';
import Scroll from './components/Scroll';
import './App.css';
import 'tachyons';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      quotes : []
    }
  }
  
  
  
  componentDidMount(){
    fetch('https://type.fit/api/quotes')
    .then(response=> response.json())
    .then(quotes=> this.setState({quotes: quotes}));
  }
  
  
  
  render(){
    const {quotes} = this.state;
    if (!quotes.length){
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Motivational Quotes</h1>
          <Scroll>
            <CardList quotes={quotes}/>
          </Scroll>
          

        </div>
      );
    }


  }



}




export default App;
