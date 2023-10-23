import { Intro } from "./intro";

const foodMenus = [
    {
        week:"월요일",
        breakfast:"시리얼",
        lunch:"제육덮밥",
        dinner:"김치찌개"

    },
    {
        week:"화요일",
        breakfast:"쉐이크",
        lunch:"샤브샤브",
        dinner:"보쌈"
    },
    {
        week:"수요일",
        breakfast:"토스트",
        lunch:"중국집",
        dinner:"스시"
    }
];
const propsEx = () =>{
    return(
        <div>
            <Intro name={"김정현"} age={12}/>
            <Intro name={"김무슨"} age={30}/>
            <br/>

            <foodMenus 
            week={foodMenus[0].week}
            breakfast={foodMenus[0].breakfast}
            lunch={foodMenus[0].lunch}
            dinner={foodMenus[0].dinner}/>
            
        </div>
    )
};
export default propsEx;