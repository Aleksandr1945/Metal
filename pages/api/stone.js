import { stone } from './data/stone'

export default function handler(req, res) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(stone)
  };
}