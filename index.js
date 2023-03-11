const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
    cats.push(name)
    return (cats);
}

function  destructivelyPrependCat(name){
    cats.unshift(name)
    return (cats);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return (cats);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    return (cats);
}

function appendCat(name){
    const newCats = [...cats, name];
    return (newCats);
}

function prependCat(name){
    const newCats2 = [name,...cats];
    return (newCats2);
}

function removeLastCat(){
    const newCats3 = cats.slice(0,cats.length-1);
    return (newCats3);
}

function removeFirstCat(){
    const newCats3 = cats.slice(1);
    return (newCats3);
}