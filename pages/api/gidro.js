import { gidro } from './data/gidro'

export default function handler(req, res) {
  console.log(req);
  if (req.method === 'GET') {
    res.status(200).json(gidro[0].category);
  };
}