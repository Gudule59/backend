
// Sert a verifier que le token envoyé par le front est correct

const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
       next();
   } catch(error) {
       // Gestion de l'erreur de manière sécurisée
       console.error('Error in JWT verification:', error);
       res.status(401).json({ error: 'Unauthorized' });
   }
};