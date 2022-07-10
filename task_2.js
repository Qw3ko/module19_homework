function ifThereIs(a, obj) {
    console.log(a in obj);
}

const obj = {
    name: 'Alex',
    surname: 'Miller'
};

ifThereIs('name', obj);