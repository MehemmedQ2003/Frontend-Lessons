// let count  = 1;

// <div>
//     <h1>Hello, World!</h1>
//     <a href="https://vitejs.dev/guide/features.html" target="_blank">
//         <img>Vite Docs</img>
//     </a>
//     <ul>
//         <li>
//             {
//                 count > 0 ? (
//                     <button onClick={() => setCount((count) => count - 1)}>
//                         count is {count}
//                     </button>
//                 ) : null
//             }
//         </li>
//     </ul>
// </div>




let card = (
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
            Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
);

// Convert to js

let cardJs = `
<div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
    </button>
    <p>
        Edit <code>src/App.jsx</code> and save to test HMR
    </p>
    <p>
        Edit <code>src/App.jsx</code> and save to test HMR
    </p>
</div>`;