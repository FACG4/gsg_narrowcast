const Events = require('../event_schema');

const query = (req, res, callback) => {
  if (Object.values(res.req.body).includes('')) {
    res.send({ message: 'please make sure all fields are filled with valid data' });
    return;
  }
  Events.findByIdAndUpdate(req.params.id,
    {
      $set: {
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
      if (err) return err;
      if (response === null) res.send({ message: 'the event you are trying to update does not exist' });
      if (callback && typeof callback === 'function') callback();
    })
    .then(() => {
    })
    .catch(err => err);
};

module.exports = query;
