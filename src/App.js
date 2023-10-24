import PropsEx from "./components/ex03/propsEx";
import { ComEx01,ComEx02 } from "./components/ex02/ComEx01";
import { Ex05 } from "./components/ex05/Ex05";
import { Ex07 } from "./components/ex07/Ex07";
import { Ex09 } from "./components/ex09/Ex09";

const App = () =>{
  return (
  <div>

     {/* <div>
          <h3>프리티어 세팅했음</h3>
        </div>
  
    <ComEx01/>
    <ComEx02/> 
    <PropsEx/>
      <Ex05/>
     <Ex06/>
     <Ex07/>
     */}
     <Ex09/>
  </div>  
  );
};

export default App;

/* jsx 문법 규칙
태그가 2개 이상일땐 반드시 부모 태그로 닫아줘야함

컴포넌트
레이아웃과 비슷가게 디자인의 하나의 영역을 뜻함
컴포넌트 제작시 파일명과 함수명이 동일해야하며 첫글자는 대문자로 시작할것
컴포넌트 함수를 제작후 내보내기 export 를 해줘야함

내보내기 불러오기

import 불러오기
export 내보내기*/