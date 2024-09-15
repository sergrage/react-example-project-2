import classes from "./App.module.scss";

import "./index.scss";

const App = () => {
    console.log(classes);
    
    return (
        <>
                <h1 className={classes.red}>Hello World</h1>
                <p className="size">qwewqweqweqwe</p>
        </>

    )
}

export default App;