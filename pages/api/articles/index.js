import { articles } from '../../../data';

export default function (req, res) {
  res.status(200).json(articles);
}
