
export const FoodMenu = ({week,breakfast,lunch,dinner}) =>{
    return(
        <div>
            <div>

                <h2>{menus[0].week}메뉴</h2>
                <h3>아침:{menus[0].breakfast}</h3>
                <h3>점심:{menus[0].lunch}</h3>
                <h3>저녁:{menus[0].dinner}</h3>
            </div>
            
            <div>

                <h2>{menus[0].week}메뉴</h2>
                <h3>아침:{menus[0].breakfast}</h3>
                <h3>점심:{menus[0].lunch}</h3>
                <h3>저녁:{menus[0].dinner}</h3>
            </div>


            {/* <h2>{week} 메뉴</h2>
            <h3>아침: {breakfast}</h3>
            <h3>점심: {lunck}</h3>
            <h3>저녁: {dinner}</h3>
            <hr/> */}
        </div>
    );
};