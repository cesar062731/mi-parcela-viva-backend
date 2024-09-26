import express from 'express';

const app = express();

// Tu código aquí

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});