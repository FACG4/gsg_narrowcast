const Events = require('../database/event_schema');
const dbConnection = require('../database/db_connect');

exports.post = (req, res, next) => {
  Events.findByIdAndUpdate(req.params.id,
    {
      $set:
      {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        title: req.body.title,
        hall: req.body.hall,
        speaker: req.body.speaker,
        imageUrl: req.body.imageUrl,
        descriptionTitle: req.body.descriptionTitle,
        DescriptionText: req.body.DescriptionText,
      },
    },
    {
      new: true,
    },
    (err, response) => {
      if (err) res.send({ message: 'some data is invalid' });
    })
    .then(() => {
      res.send({ message: 'event successfully updated' });
    })
    .catch(err => next(err));
};

exports.get = (req, res) => {
  res.render('update_events');
};
