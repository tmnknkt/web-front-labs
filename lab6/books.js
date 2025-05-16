const books = [
    {
        author: 'Дж. Роулинг',
        name: 'Гарри Поттер',
        publicationYear: 1998,
        price: 80,
        bestseller: false,
        available: true
    },
    {
        author: 'П. Коэльо',
        name: 'Алхимик',
        publicationYear: 1999,
        price: 460,
        bestseller: true,
        available: false
    },
    {
        author: 'П. Коэльо',
        name: 'Дневник мага',
        publicationYear: 2001,
        price: 1230,
        bestseller: true,
        available: false
    },
    {
        author: 'П. Коэльо',
        name: 'Вероника решает умереть',
        publicationYear: 1998,
        price: 780,
        bestseller: true,
        available: true
    },
    {
        author: 'Гоголь',
        name: 'Вий',
        publicationYear: 1987,
        price: 900,
        bestseller: false,
        available: true
    },
    {
        author: 'Эрих Мария Ремарк',
        name: 'Триумфальная арка',
        publicationYear: 1945,
        price: 1100,
        bestseller: true,
        available: false
    },
    {
        author: 'Булгаков',
        name: 'Мастер и Маргарита',
        publicationYear: 1967,
        price: 800,
        bestseller: false,
        available: true
    },
    {
        author: 'Оскар Уайльд',
        name: 'Портрет Дориана Грея',
        publicationYear: 1890,
        price: 650,
        bestseller: true,
        available: true
    },
    {
        author: 'Дэниел Киз',
        name: 'Таинственная история Билли Миллигана',
        publicationYear: 1967,
        price: 950,
        bestseller: false,
        available: false
    },
    {
        author: 'Джером Сэлинджер',
        name: 'Над пропастью во ржи',
        publicationYear: 1951,
        price: 700,
        bestseller: true,
        available: true
    }
];

function showBooks() {
    const bookList = document.getElementById('bookList');
    let html = '';

    for(let i = 0; i < books.length; i++) {
        const book = books[i];
        const isAvailable = book.available;
        const isBestseller = book.bestseller;

        let bookClass = 'book-item';
        if (isBestseller) {
            bookClass += ' bestseller';
        }
        if (!isAvailable) {
            bookClass += ' unavailable';
        }

        html += `
            <div class="${bookClass}">
                <b>${book.author}</b>
                <i>${book.name}</i>
                &mdash; ${book.publicationYear}
                - Цена: ${book.price} руб.
                ${isAvailable ? '' : '<span class="unavailable-text"> (Нет в наличии)</span>'}
            </div>
        `;
    }
    bookList.innerHTML = html;
}