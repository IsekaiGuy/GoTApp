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

const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, ${res.status}`);
    }

    return await res.json();
}

export const getAllCharacters = async () => {
    const res = await getResource("/characters?page=5");
    res.map(_transformCharacter);
}

export const getCharacter = async (id) => {
    const character = await getResource(`/characters/${id}`);
    return _transformCharacter(character);
}

export const getAllBooks = () => {
    return getResource("/books?page=5");
}

export const getBook = (id) => {
    return getResource(`/books/${id}`);
}

export const getAllHouses = () => {
    return getResource("/houses?page=5");
}

export const getHouse = (id) => {
    return getResource(`/houses/${id}`);
}