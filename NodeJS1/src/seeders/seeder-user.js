'use strict';
module.exports = {
  // up là chạy dữ liệu bth và thêm dữ liệu vào
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '12345',
      firstName: 'ThaiBinh',
      lastName: 'Peacefull',
      address: 'USA',
      gender: 1,
      roleId:'123',
      phoneNumber:'+84 0796782810',
      positionId: '123',
      image:'123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  //khi muốn cancel thêm dữ liệu. khi bị lỗi back lại version bị lỗi
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
