const _apiBase = "https://anapioficeandfire.com/api";
const _transformCharacter = (char) => {
    return {
        name: char.name === "" ? "n/a" : char.name,
        gender: char.gender === "" ? "n/a" : char.gender,
        born: char.born === "" ? "n/a" : char.born,
        died: char.died === "" ? "n/a" : char.died,
        culture: char.culture === "" ? "n/a" : char.culture
    }
}

const _transformHouse = (house) => {
    return {
        name: house.name === "" ? "n/a" : house.name,
        region: house.region === "" ? "n/a" : house.region,
        words: house.words === "" ? "n/a" : house.words,
        titles: house.titles === "" ? "n/a" : house.titles,
        culture: house.culture === "" ? "n/a" : house.culture,
        ancestralWeapons: house.ancestralWeapons === "" ? "n/a" : house.ancestralWeapons
    }
}

const _transformBook = (book) => {
    return {
        name: book.name === "" ? "n/a" : book.name,
        numberOfPages: book.numberOfPages === "" ? "n/a" : book.numberOfPages,
        publiser: book.publiser === "" ? "n/a" : book.publiser,
        released: book.released === "" ? "n/a" : book.released
    }
}

const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, ${res.status}`);
    }

    return await res.json();
}

export const getAllCharacters = async () => {
    const res = await getResource("/characters?page=5");
    return res.map(_transformCharacter);
}

export const getCharacter = async (id) => {
    const character = await getResource(`/characters/${id}`);
    return _transformCharacter(character);
}

export const getAllBooks = async () => {
    const res = await getResource("/books?page=1");
    return res.map(_transformBook);
}

export const getBook = async (id) => {
    const book = await getResource(`/books/${id}`);
    return _transformBook(book);
}

export const getAllHouses = async () => {
    const res = await getResource("/houses?page=5");
    return res.map(_transformHouse);
}

export const getHouse = async (id) => {
    const house = await getResource(`/houses/${id}`);
    return _transformHouse(house);
}