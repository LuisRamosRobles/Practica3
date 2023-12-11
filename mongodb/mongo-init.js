// mongodb/mongo-init.js
db.createUser({
    user: 'user',
    pwd: '123',
    roles: [
      {
        role: 'readWrite',
        db: 'nombresDB',
      },
    ],
  });
  