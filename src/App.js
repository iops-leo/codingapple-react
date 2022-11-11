import "./App.css";
import {useState} from "react";

function App() {
    let [title, setTitle] = useState(['남자 코드 추천','여자 코트 추천','맛집 추천']);
    let [goodCount, setGoodCount] = useState([0,0,0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState('');

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
                                setModalTitle(val);
                            }}>{val}
                                <span onClick={()=>{
                                    let copy = [...goodCount];
                                    copy[i] = copy[i]+1;
                                    setGoodCount(copy);
                                }}>👍</span>
                                {goodCount[i]} </h4>
                            <p>2월 16일 발행</p>
                        </div>
                    )
                })
            }
            {
                modal === true ?  <Modal title={title} modalTitle={modalTitle}></Modal> : null
            }
        </div>
    );
}

function Modal(props){
    return (
        <div className="modal">
            <h4>{props.modalTitle}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
}

export default App;
