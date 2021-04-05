// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(200).json({ name });
};
