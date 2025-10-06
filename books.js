const books = [
  { title: "The Silent Forest", author: "Emily Harper", year: 2015, genre: "Fiction", price: 12.99, stock: 8 },
  { title: "Digital Dreams", author: "Michael Chen", year: 2019, genre: "Science Fiction", price: 15.50, stock: 12 },
  { title: "Cooking with Love", author: "Sophia Martinez", year: 2020, genre: "Cooking", price: 22.00, stock: 5 },
  { title: "History of Time", author: "Dr. Alan Stone", year: 2010, genre: "History", price: 18.75, stock: 7 },
  { title: "Ocean Tales", author: "Liam Carter", year: 2018, genre: "Adventure", price: 11.99, stock: 14 },
  { title: "Mind Over Matter", author: "Rachel Kim", year: 2021, genre: "Self-Help", price: 14.25, stock: 9 },
  { title: "The Last Kingdom", author: "David Johnson", year: 2013, genre: "Fantasy", price: 16.40, stock: 10 },
  { title: "Code Masters", author: "Olivia Brown", year: 2022, genre: "Technology", price: 25.00, stock: 6 },
  { title: "Poetry of Stars", author: "Noah Wilson", year: 2017, genre: "Poetry", price: 9.99, stock: 20 },
  { title: "Secrets of the Mind", author: "Hannah Lee", year: 2016, genre: "Psychology", price: 19.99, stock: 11 },
  { title: "Into the Desert", author: "Ethan White", year: 2014, genre: "Adventure", price: 13.50, stock: 13 },
  { title: "World of Wonders", author: "Charlotte Green", year: 2023, genre: "Science", price: 27.80, stock: 4 },
  { title: "Legends Untold", author: "Daniel Wright", year: 2011, genre: "Fantasy", price: 15.20, stock: 8 },
  { title: "Journey to Space", author: "Amelia Young", year: 2020, genre: "Science Fiction", price: 21.00, stock: 7 },
  { title: "Life Lessons", author: "Benjamin Scott", year: 2019, genre: "Non-Fiction", price: 17.25, stock: 15 },
  { title: "Garden Magic", author: "Isabella Adams", year: 2012, genre: "Lifestyle", price: 12.00, stock: 9 },
  { title: "Haunted Nights", author: "Lucas King", year: 2021, genre: "Horror", price: 14.99, stock: 8 },
  { title: "Music of the Soul", author: "Grace Baker", year: 2017, genre: "Music", price: 23.50, stock: 6 },
  { title: "Ancient Civilizations", author: "Christopher Hall", year: 2010, genre: "History", price: 20.75, stock: 10 },
  { title: "Bright Futures", author: "Natalie Moore", year: 2022, genre: "Education", price: 18.00, stock: 12 }
];

function printBooks(books) {
    for(let i=0;i<books.length;i++) {
        console.log(books[i]['title']);
    }
}

function booksPriceFilter(books, price) {
    for(let i=0;i<books.length;i++) {
        book_price = books[i]['price'];
        if (book_price < price) {
            console.log(books[i]['title'], book_price);
        }
    }
}

booksPriceFilter(books, 14);