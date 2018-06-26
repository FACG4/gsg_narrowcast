const Events = require('../event_schema');

const query = (req, callback) => {
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
      callback(null, response);
    })
    .then(() => {
    })
    .catch(err => err);
};


module.exports = query;
