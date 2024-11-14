const router = require('express').Router();
const auth = require('../../middleware/auth');
const Payment = require('../../models/payment');

router.post('/add', auth, async (req, res) => {
  const { orderId, amount, method } = req.body;
  const userId = req.user._id;

  const payment = new Payment({ userId, orderId, amount, method });
  await payment.save((err, data ) => {
    console.log(err);
    if (err) {
      return res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
    }
    res.status(200).json({ success: true, message: 'Payment saved successfully.', payment: data });
  });
});

router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ payments });
  } catch (error) {
    res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    res.status(200).json({ payment });
  } catch (error) {
    res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
  }
});

router.put('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json({ payment });
  } catch (error) {
    res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    res.status(200).json({ payment });
  } catch (error) {
    res.status(400).json({ error: 'Your request could not be processed. Please try again.' });
  }
});

module.exports = router;
