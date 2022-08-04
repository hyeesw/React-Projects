import './App.css';
import {useState} from 'react';
import Modal from './Modal';
import Head from './Head';


function App() {
  const blogTitle = "요리 Blog";
  let [contents, setContents] = useState(["장조림 만들기", "김치 만들기", "두부조림 만들기"]);
  let [date, setDate] = useState(['8/1 발행', '8/2 발행', '8/3 발행']);
  let [likes, setLikes] = useState([0,0,0]);


  function contentsSort(){
    let contentsArr = [...contents];  //배열 deepcopy
    contentsArr.sort();
    setContents(contentsArr);
  }

  function thumbsUp(num){
    let thumbs = [...likes]; //state배열 deepcopy
    thumbs[num] += 1;  //배열 일부 수정
    setLikes(thumbs);  //useState에 반영
  }

  return (
    <div className="App">
      <div className='black-nav'>{blogTitle}</div>
      <button onClick={contentsSort}>글 정렬</button>
      <div className='main'>
        <Head 제목={contents[0]} 날짜={date[0]}/>
        <button id='button1' onClick={ ()=>{thumbsUp(0)} }><i class="fa-solid fa-thumbs-up"></i></button>
        <p>{likes[0]}</p>
        <hr/>
        <Head 제목={contents[1]} 날짜={date[1]}/>
        <button id='button2' onClick={ ()=>{thumbsUp(1)} }><i class="fa-solid fa-thumbs-up"></i></button>
        <p>{likes[1]}</p>
        <hr/>
        <Head 제목={contents[2]} 날짜={date[2]}/>
        <button id='button3' onClick={ ()=>{thumbsUp(2)} }><i class="fa-solid fa-thumbs-up"></i></button>
        <p>{likes[2]}</p>
        <hr/>
      </div>
      <Modal 제목={contents[0]} 날짜={date[0]}/>
    </div>
  );
}

export default App;
