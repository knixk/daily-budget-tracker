var amount = [];
var sum = 0;

const why = document.getElementById('name');
const no = document.getElementById('remove');
const gee = document.getElementById('showlist');


// input from name text box & price


var name = document.getElementById('article-name').value
var price = document.getElementById('input').value


// current balance
var balance = document.getElementById('price')


// console.log(balance)



// add button to add a div in containers off, add the name and add the price is is negative 





// add button to remove the last item





// add button to add class of showlist or off



// add
var container = document.getElementById('six')
why.addEventListener('click', () => {
    var name = document.getElementById('article-name').value
    var price = document.getElementById('input').value

    var element = document.createElement('div')

    element.classList.add('items')

    element.innerHTML = "<p>Name:" + "&nbsp;" + name + "</p>" + "&nbsp;" + "<p>Price:" + "&nbsp;" + price + "</p>";

    sum += parseInt(price)

    amount.push(parseInt(price))
    
    // console.log(amount);

    // console.log(sum);

    container.appendChild(element)
    balance.innerHTML = sum;

    if (parseInt(price) < 0) {
        // console.log("negative")
    }
})

var array = [];

// remove the last item 




// remove
no.addEventListener('click', () => {
    // queue.removeChild(elements[0]);
    var expense = container.getElementsByTagName('div')
    container.removeChild(expense[0])
    // console.log(expense[0]);
    // console.log(amount);
    sum -= amount.shift();
    // console.log(sum)

    balance.innerHTML = sum

    
})


// showlist

let count = 1;
gee.addEventListener('click', () => {


    if (container.classList.contains('on')) {
        container.classList.remove('on')
    } else {
        container.classList.add('on')
    }



})
