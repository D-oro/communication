import { Feelings } from "./Feelings";
import { Needs } from "./Needs";

export const Home = () => {
    return(
        <div className="App">
            <Feelings />
            <Needs />
        </div>
    )
};