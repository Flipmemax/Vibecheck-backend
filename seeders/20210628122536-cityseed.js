"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cities", [
      {
        name: "Tokyo",
        imgUrl:
          "https://www.visasjapan.com/wp-content/uploads/sites/37/2019/03/traveling-to-tokyo.jpg",
        vidUrl: "https://www.youtube.com/watch?v=i3powwL7bT0",
        songUrl: "https://soundcloud.com/lofi_girl/lazysunday",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seoul",
        imgUrl: "https://imgur.com/a/X8z1sCu",
        vidUrl: "https://www.youtube.com/watch?v=I0B21LjeSUQ",
        songUrl: "https://soundcloud.com/lofi_girl/4-am-studysession",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New York",
        imgUrl:
          "https://www.lastminutevakantievergelijk.nl/wp-content/uploads/2019/05/new-york.jpg",
        vidUrl: "https://www.youtube.com/watch?v=-IpXdtWfneI",
        songUrl: "https://soundcloud.com/lofi_girl/cozy-winter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cities", null, {});
  },
};
