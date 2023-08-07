import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      additional_data: Yup.string(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const recipient = await Recipient.findOne({
      where: { zip_code: req.body.zip_code },
    });

    if (recipient) {
      return res.status(401).json({ error: 'Recipient already included' });
    }

    const {
      id,
      name,
      additional_data,
      street,
      number,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      additional_data,
      street,
      number,
      state,
      city,
      zip_code,
    });
  }
}

export default new RecipientController();
