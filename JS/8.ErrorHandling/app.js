// function calculateSumOfArguments(...arguments){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(arguments);
//     console.log(sum);
// }
// calculateSumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// ! Try catch blokun-dan şübhələndiyimiz yerlərdə errorların ekrana və yaxud console ekranına çıxmaması üçün istifaə edirik.
//  İşləmə prinsipi belədir. İlk öncə şübhələndiyimiz kodları try bloku-nun daxilinə yazırıq. əgər orada bir problem çıxarsa catch bloku-da error nəzərə alır.



function showError(){
    let a = 100;
    let b = 200;

    try{
        const number = 10;
        number = 20;
        console.log(number);
    }
    catch(error){
        let div1 = document.querySelector('.div1');
        div1.innerHTML = `
            <h1 style="color: blue;">${error.message}</h1>
            <h2 style="color: red;">${error.name}</h2>
            <h3 style="color: green;">${error.stack}</h3>
        `
    }
    let div2 = document.querySelector('.div2');
    div2.innerHTML = `
        <h1 style="color: blue;">${a + b}</h1>
    `
}