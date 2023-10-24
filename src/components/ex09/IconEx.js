import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export const IconEx = () =>{
    return(
        <div>
            <FontAwesomeIcon icon={faUser} style = {{color: "greay"}}/>
            <FontAwesomeIcon icon={faHeart} style = {{color: "red"}}/>

        </div>
    );
};