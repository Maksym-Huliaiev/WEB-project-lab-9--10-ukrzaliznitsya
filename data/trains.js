export const trains = [
  {
    id: 1,
    number: "705К",
    route: { from: "Київ", to: "Перемишль" },
    departure: "2026-04-10T06:00:00",
    duration: "9г 15хв",
    wagons: [
      { id: 1, type: "Купе", freeSeats: [1, 2, 5, 10] },
      { id: 2, type: "Люкс", freeSeats: [3, 4] }
    ]
  },
  {
    id: 2,
    number: "091К",
    route: { from: "Київ", to: "Львів" },
    departure: "2026-04-10T22:14:00",
    duration: "7г 30хв",
    wagons: [
      { id: 1, type: "Плацкарт", freeSeats: [12, 14, 15] }
    ]
  },
  {
    id: 3,
    number: "743Л",
    route: { from: "Львів", to: "Київ" },
    departure: "2026-04-11T07:15:00",
    duration: "6г 05хв",
    wagons: [
      { id: 1, type: "Інтерсіті", freeSeats: [1, 5, 8, 12] },
      { id: 2, type: "Інтерсіті", freeSeats: [20] }
    ]
  },
  {
    id: 4,
    number: "026Л",
    route: { from: "Львів", to: "Одеса" },
    departure: "2026-04-11T21:40:00",
    duration: "10г 50хв",
    wagons: [
      { id: 1, type: "Купе", freeSeats: [1, 2, 3] },
      { id: 2, type: "Плацкарт", freeSeats: [10, 11, 12] }
    ]
  },
  {
    id: 5,
    number: "807Л",
    route: { from: "Львів", to: "Івано-Франківськ" },
    departure: "2026-04-12T09:20:00",
    duration: "2г 35хв",
    wagons: [
      { id: 1, type: "Регіональний", freeSeats: [1, 2, 3, 4, 5] }
    ]
  },
  {
    id: 6,
    number: "045Л",
    route: { from: "Львів", to: "Ужгород" },
    departure: "2026-04-12T14:10:00",
    duration: "5г 20хв",
    wagons: [
      { id: 1, type: "Купе", freeSeats: [16, 17, 18] },
      { id: 2, type: "Купе", freeSeats: [4, 5] }
    ]
  }
];