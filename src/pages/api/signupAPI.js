// // // src/pages/api/signupAPI.js
// // import { connectToDatabase } from '../../../utils/db';
// // import User from '../../../server/models/User';
// // import runCorsMiddleware from 'nextjs-cors';
// // import Cors from 'cors';


// // const cors = {
// //   methods: ['POST'], // Allow only POST requests
// //   origin: '*', // Allow any origin
// //   optionsSuccessStatus: 200, // Success status for preflight requests (OPTIONS)
// // };


// // export default async (req, res) => {
// //   await runCorsMiddleware(req, res, cors); // Apply CORS middleware

// //   if (req.method === 'POST') {
// //     const { username, email, password } = req.body;

// //     try {
// //       const { db } = await connectToDatabase();

// //       const existingUser = await db.collection('roamGeniusUsers').findOne({ email });

// //       if (existingUser) {
// //         return res.status(400).json({ message: 'User already exists' });
// //       }

// //       const newUser = new User({ username, email, password });
// //       await db.collection('roamGeniusUsers').insertOne(newUser);

// //       res.status(201).json({ message: 'User created successfully' });
// //     } catch (error) {
// //       res.status(500).json({ message: 'Something went wrong' });
// //       console.log(error);
// //     }
// //   } else {
// //     res.status(405).json({ message: 'Method not allowed' });
// //   }
// // };

// // src/pages/api/signupAPI.js
// import { connectToDatabase } from '../../../utils/db';
// import User from '../../../../server/models/User';
// import Cors from 'cors';

// // Initialize the cors middleware
// const cors = Cors({
//   methods: ['POST'], // Allow only POST requests
//   origin: '*', // Allow any origin
// });

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }

// export default async (req, res) => {
//   // Run the middleware
//   await runMiddleware(req, res, cors);

//   if (req.method === 'POST') {
//     const { username, email, password } = req.body;

//     try {
//       const { db } = await connectToDatabase();

//       const existingUser = await db.collection('roamGeniusUsers').findOne({ email });

//       if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//       }

//       const newUser = new User({ username, email, password });
//       await db.collection('roamGeniusUsers').insertOne(newUser);

//       res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong' });
//       console.log(error);
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// };
