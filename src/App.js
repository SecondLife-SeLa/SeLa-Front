import './App.css';
import SelaHeader from './components/SelaHeader';
import {
} from 'semantic-ui-react'
import CardSlider from './components/CardSlider';
import Banner from './components/mainBanner';
import Board from './components/mainBoard';

function App() {


  const sliderClick = (slider) =>{
    alert("상세페이지");
  }

  const slides = [
      {image:'https://picsum.photos/200/100', title:"우영우", description:"변호사 알바", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/200', title:"퉁퉁이", description:"공연 공짜로 뜁니다.", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/300', title:"철수", description:"아역배우역 자리 찾습니다.", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/400', title:"머스크", description:"화성갑니다.", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/500', title:"잡스", description:"휴대폰 대리점 경력 10년입니다.", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/600', title:"백종원", description:"식당 일자리 찾습니다.", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/700', title:"KIM", description:"alba gu hab ni da", clickEvent:sliderClick},
      {image:'https://picsum.photos/200/300/?blur', title:"허태성", description:"알바 구합니다", clickEvent:sliderClick}

  ];


  return (
    <div className="App">
      <div id = "body">
      <CardSlider slides={slides}/>
      </div>
      <SelaHeader/>
      <Banner/>
      <Board/>
    </div>
    
    
  );
}

export default App;
