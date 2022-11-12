import "./App.css";
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['남자 코드 추천','여자 코트 추천','맛집 추천']);
    let [goodCount, setGoodCount] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [index, setIndex] = useState(0);
    let [inputData, setInputData] = useState('');
    const nowDate = new Date().getMonth()+"월"+new Date().getDate()+"일";

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {
                title.map(function (val, i){
                    return(
                        <div className="list" key={i}>
                            <h4 onClick={()=>{
                                modal === true ? setModal(false) : setModal(true)
                                setIndex(i);
                            }}>{val}
                                <span onClick={(e)=>{
                                    e.stopPropagation();
                                    let copy = [...goodCount];
                                    copy[i] = copy[i]+1;
                                    setGoodCount(copy);
                                }}>👍</span>
                                {goodCount[i]} </h4>
                            <p>{nowDate} 발행</p>
                            <button onClick={(e)=>{
                                let copy = [...title];
                                copy.splice(i,i+1);
                                setTitle(copy);
                            }}>삭제</button>
                        </div>
                    )
                })
            }
            <input onChange={(e)=>{
                setInputData(e.target.value);
            }}></input>
            <button onClick={()=>{
                if(inputData === ''){
                    alert("글 입력 하세요.");
                    return;
                }
                let copy = [...title];
                copy.unshift(inputData);
                setTitle(copy);

                let copy2 = [...goodCount];
                copy2.unshift(0);
                setGoodCount(copy2);
            }}>글 발행</button>
            {
                modal === true ?  <Modal title={title} index={index}></Modal> : null
            }
        </div>
    );
}

function Modal(props){
    return (
        <div className="modal">
            <h4>{props.title[props.index]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
}

export default App;
