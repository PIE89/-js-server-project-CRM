function getTestData() {
  const testData = [
    {
      name: "Иван",
      phone: 782823423,
      email: "iv@ya.ru",
      product: "course-html",
    },
    {
      name: "Петр",
      phone: 782823423,
      email: "pe@ya.ru",
      product: "course-js",
    },
    {
      name: "Ольга",
      phone: 782823423,
      email: "ol@ya.ru",
      product: "course-vue",
    },
    {
      name: "Евгений",
      phone: 782823423,
      email: "ev@ya.ru",
      product: "course-html",
    },
    {
      name: "Олег",
      phone: 782823423,
      email: "oleg@ya.ru",
      product: "course-wordpress",
    },
    {
      name: "Анна",
      phone: 782823423,
      email: "ann@ya.ru",
      product: "course-html",
    },
    {
      name: "Светлана",
      phone: 782823423,
      email: "sve@ya.ru",
      product: "course-php",
    },
    {
      name: "Сергей",
      phone: 782823423,
      email: "ser@ya.ru",
      product: "course-php",
    },
    {
      name: "Алина",
      phone: 782823423,
      email: "al@ya.ru",
      product: "course-wordpress",
    },
    {
      name: "Арина",
      phone: 782823423,
      email: "ar@ya.ru",
      product: "course-vue",
    },
    {
      name: "Матвей",
      phone: 782823423,
      email: "mat@ya.ru",
      product: "course-js",
    },
    {
      name: "Максим",
      phone: 782823423,
      email: "max@ya.ru",
      product: "course-wordpress",
    },
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomIndex = getRandomInt(testData.length);
  const randomData = testData[randomIndex];
  return randomData;
}

export default getTestData;
