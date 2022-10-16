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
      return res.status(404).json({ error: 'Slug not found' });
  }
  return res.json(data);
};

export default SlugQuery;
