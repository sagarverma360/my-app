import type { NextApiRequest, NextApiResponse } from 'next'
import coffeeStoresData from "@/data/coffee-stores.json";
import { storeType } from '@/types/type';

type Data = {
    coffeeStores: storeType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 res.status(200).json({coffeeStores:coffeeStoresData})
}
