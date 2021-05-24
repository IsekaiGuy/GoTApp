const _apiBase = "https://anapioficeandfire.com/api";

const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, ${res.status}`);
    }

    return await res.json();
}

export const getAllCharacters = () => {
    return getResource("/characters?page=5");
}

export const getCharacter = (id) => {
    return getResource(`/characters/${id}`);
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