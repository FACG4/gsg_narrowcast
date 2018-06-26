const Events = require('../event_schema');

const addQuery = (req, callback) => {
  Events.create({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    title: req.body.title,
    hall: req.body.hall,
    speaker: req.body.speaker,
    imageUrl: req.body.imageUrl,
    descriptionTitle: req.body.descriptionTitle,
    DescriptionText: req.body.DescriptionText,
  })
    .then((res) => {
      callback(null, res);
    })
    .catch(err => callback(err));
};

module.exports = addQuery;
