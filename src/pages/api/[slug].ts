import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

const SlugQuery = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug'];

  if (!slug || typeof slug !== 'string') {
      return res.status(500).json({ error: 'Slug is required' });
  }

  const data = await prisma.shortLink.findFirst({
      where: {
          slug: {
              equals: slug,
          }
      }
  });

  if (!data) {
      res.status(404).json({ error: 'Slug not found' });
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Cache-Control", "s-maxage=1000, stale-while-revalidate");
      return
  }
  return res.json(data);
};

export default SlugQuery;
