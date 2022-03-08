import Counter, { number } from './Counter';
// import { number } from './Counter';
console.log(number);
// a functional component
// components are functions that returns HTML
// can think of components as partials
const App = () => {
    return (
        <div>
            <Counter/>
            <Counter/>
        </div>
    );
};
<Counter/>
;

export default App;
