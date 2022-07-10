function all(obj) {
    for (let key in obj) {
        console.log(key);
        console.log(obj[key]);
    }
}

const obj = {
    name: 'Alex',
    surname: 'Miller'
};

all(obj);