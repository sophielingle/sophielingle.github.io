/* Toggle Button */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Gets the Books from JSON File */
const getBooks = async () => {
    const url = "https://sophielingle.github.io/csce242/json/books.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

/* Shows the Best Sellers */
const showBestSellers = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        if(getBestSellerSection(book)){
            document.getElementById("book-section").append(getBestSellerSection(book));
        }
    });
};

/* Creates each Best Seller Section */
const getBestSellerSection = (book) => {
    if (book.bestSeller !== "yes") {
        return null; 
    }

    const a = document.createElement("a");
    a.href = `book${book.id}.html`;
    
    const section = document.createElement("section");
    section.classList.add("columns");
    section.classList.add("best-seller");
    
    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);
    
    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    div.append(h2);
    div.append(h3);
    div.append(p);
    section.append(div);
    
    a.append(section)

    return a;
};

/* Shows the Horror Books */
const showHorror = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        if(getHorrorSection(book)){
            document.getElementById("horror-section").append(getHorrorSection(book));
        }
    });
};

/* Creates each Horror Section */
const getHorrorSection = (book) => {
    if (book.genre !== "Horror") {
        return null; 
    }

    const a = document.createElement("a");
    a.href = `book${book.id}.html`;
    
    const section = document.createElement("section");
    section.classList.add("columns");
    section.classList.add("best-seller");
    
    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);
    
    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    div.append(h2);
    div.append(h3);
    div.append(p);
    section.append(div);
    
    a.append(section)

    return a;
};

/* Shows the Drama Books */
const showDrama = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        if(getDramaSection(book)){
            document.getElementById("drama-section").append(getDramaSection(book));
        }
    });
};

/* Creates each Drama Section */
const getDramaSection = (book) => {
    if (book.genre !== "Drama") {
        return null; 
    }

    const a = document.createElement("a");
    a.href = `book${book.id}.html`;
    
    const section = document.createElement("section");
    section.classList.add("columns");
    section.classList.add("best-seller");
    
    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);
    
    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    div.append(h2);
    div.append(h3);
    div.append(p);
    section.append(div);
    
    a.append(section)

    return a;
};

/* Shows the Mystery Books */
const showMystery = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        if(getMysterySection(book)){
            document.getElementById("mystery-section").append(getMysterySection(book));
        }
    });
};

/* Creates each Mystery Section */
const getMysterySection = (book) => {
    if (book.genre !== "Mystery") {
        return null; 
    }

    const a = document.createElement("a");
    a.href = `book${book.id}.html`;
    
    const section = document.createElement("section");
    section.classList.add("columns");
    section.classList.add("best-seller");
    
    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);
    
    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    div.append(h2);
    div.append(h3);
    div.append(p);
    section.append(div);
    
    a.append(section)

    return a;
};

/* Shows the Romance Books */
const showRomance = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        if(getRomanceSection(book)){
            document.getElementById("romance-section").append(getRomanceSection(book));
        }
    });
};

/* Creates each Romance Section */
const getRomanceSection = (book) => {
    if (book.genre !== "Romance") {
        return null; 
    }

    const a = document.createElement("a");
    a.href = `book${book.id}.html`;
    
    const section = document.createElement("section");
    section.classList.add("columns");
    section.classList.add("best-seller");
    
    const img = document.createElement("img");
    img.src = `https://sophielingle.github.io/csce242/projects/part6/images/${book.image}`;
    img.classList.add("one");
    section.append(img);
    
    const div = document.createElement("div");
    div.classList.add("four");
    const h2 = document.createElement("h2");
    h2.innerHTML = book.title;
    const h3 = document.createElement("h3");
    h3.innerHTML = book.author;
    const p = document.createElement("p");
    p.innerHTML = book.description;
    div.append(h2);
    div.append(h3);
    div.append(p);
    section.append(div);
    
    a.append(section)

    return a;
};

showBestSellers();
showHorror();
showDrama();
showMystery();
showRomance();