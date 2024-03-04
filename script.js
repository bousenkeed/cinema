const cinemas = [
    {
        id: 1,
        name: "Кинотеатр Аврора",
        address: "Улица Пушкина, дом Колотушкина",
        halls: [
            { id: 101, name: "Зал 1", capacity: 100 },
            { id: 102, name: "Зал 2", capacity: 150 }
        ]
    },
    {
        id: 2,
        name: "Кинотеатр Спутник",
        address: "Пролетарская улица, дом 1",
        halls: [
            { id: 201, name: "Зал 1", capacity: 120 },
            { id: 202, name: "Зал 2", capacity: 140 },
            { id: 203, name: "VIP Зал", capacity: 50 }
        ]
    }
];

// Представления
const shows = [
    { id: 1, movieTitle: "Интерстеллар", startTime: "18:00", hallId: 101 },
    { id: 2, movieTitle: "Начало", startTime: "20:00", hallId: 101 },
    { id: 3, movieTitle: "Матрица", startTime: "19:00", hallId: 202 },
    { id: 4, movieTitle: "Властелин Колец", startTime: "21:00", hallId: 202 },
    { id: 5, movieTitle: "Аватар", startTime: "16:00", hallId: 102 },
    { id: 6, movieTitle: "Дюна 2", startTime: "19:00", hallId: 102 },
    { id: 7, movieTitle: "Ночной дозор", startTime: "14:00", hallId: 202 },
    { id: 8, movieTitle: "Реинкорнация", startTime: "16:00", hallId: 202 },
    { id: 9, movieTitle: "Довод", startTime: "14:00", hallId: 203 },
    { id: 10, movieTitle: "Сдача", startTime: "14:00", hallId: 203 }
];

//   Фильтрация представлений по кинотеатру:
// Напишите функцию, которая принимает id кинотеатра и массив представлений, и возвращает 
// все представления для этого кинотеатра.

function showFilter(cinemaId, shows) {
    const cinema = cinemas.find(cinema => cinema.id === cinemaId);
    if (!cinema) {
        return [];
    }
    const hallsId = cinema.halls.map(hall => hall.id);
    return shows.filter(show => hallsId.includes(show.hallId));
}
// console.log(showFilter(1, shows));



// Обработка информации о залах:
// Используя метод forEach, выведите информацию о каждом зале для заданного кинотеатра.

function hallInfo(cinemaId) {
    const cinema = cinemas.find(cinema => cinema.id === cinemaId);
    if (!cinema) {
        console.log('Кинотеатр с таким ID не найден');
    } else {
        cinema.halls.forEach(hall => {
            const { id, name, capacity } = hall;
            console.log(`Id: ${id}, Название: ${name}, Вместимость: ${capacity}`);
        })
    }
}
// hallInfo(2);



// Создание списка названий фильмов:
// Используйте метод map для создания массива названий фильмов из массива представлений.

function createMovieList(shows) {
    return shows.map(show => show.movieTitle);
}
// console.log(createMovieList(shows));



// Использование Object.keys и Object.values:
// Для заданного кинотеатра выведите все ключи и значения его свойств.

function keysAndValuesOfCinema(cinemaId) {
    const cinema = cinemas.find(cinema => cinema.id === cinemaId);
    if (cinema) {
        const keys = Object.keys(cinema);
        const values = Object.values(cinema);
        console.log('Ключи: ', keys);
        console.log('Значения: ', values);
    } else {
        console.log('Кинотеатр с таким ID не найден');
    };
};
// keysAndValuesOfCinema(1);



// Деструктуризация:
// Используйте деструктуризацию для извлечения название и адрес из объекта кинотеатра 
// при его выводе.

function nameAndAdres(cinemaId) {
    const cinema = cinemas.find(cinema => cinema.id === cinemaId);
    if (cinema) {
        const { name, address } = cinema;
        console.log(`Название: ${name}, Адрес: ${address}`)
    } else {
        console.log('Кинотеатр с таким ID не найден');
    }
};
// nameAndAdres(1);



// Функция с неограниченным количеством аргументов:
// Создайте функцию showTimings, которая принимает неограниченное количество id представлений 
// и выводит информацию о времени начала каждого из них.

function showTimings (...showsId) {
    return shows
        .filter(show => showsId.includes(show.id))
        .map(show => show.startTime);
};
// console.log(showTimings(1, 3, 5));
