export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Spare",
      author: "Harry Charles Albert David and Mohringer, John",
      price: 38.58,
      coverImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/410WEBNkvUL._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 27.5,
      coverImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    },
    {
      id: 3,
      title: "Hidden Oracle",
      author: "Rick Riordan",
      price: 10.5,
      coverImage:
        "https://d374oxlv7wyffd.cloudfront.net/B0169FUXJ2/f9b817d8/cover.jpeg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve(this.data);
        } else {
          reject(new Error("Something went wrong"));
        }
      }, 700);
    });
  }
}
