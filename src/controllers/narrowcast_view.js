const findQuery = require('../database/queries/find_query');

exports.get = (req, res) => {
  findQuery((err, result) => {
    let obj = {};
    const response = {
      data: result,
      time: () => {
        for (let i = 0; i < result.length; i++) {
          obj[i] = result[i].startDate;
        }
      },
    };
    response.time()
    console.log(Object.values(obj));

    res.render('narrowcast_view', {
      response,
      obj,
    });
  });
};
