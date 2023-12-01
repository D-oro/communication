import { Feelings } from "./Feelings";
import { Needs } from "./Needs";

export const Home = () => {
    return(
        <main className="App">
            <h1>What are you feeling and needing?</h1>
            <Feelings />
            <Needs />
        </main>
    )
};