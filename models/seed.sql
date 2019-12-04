INSERT INTO vehicles (name, reservedFrom, mpg, gasType, doors, seats, photoLink, createdAt, updatedAt) VALUES 
('Ferrari F430 F1', '{}', 11, 'Premium', 2, 2, './images/Ferrari_F430_F1.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Ferrari 458 ITALIA', '{}', 13, 'Premium', 2, 2, './images/Ferrari_458_ITALIA.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Ferrari 488 GTB', '{}', 15, 'Premium', 2, 2, './images/Ferrari_488_GTB.jpeg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Lamborghini GALLARDO LP550-2', '{}', 13, 'Premium', 2, 2, './images/Lamborghini_GALLARDO_LP550-2.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Lamborghini HURACAN LP580-2', '{}', 13, 'Premium', 2, 2, './images/Lamborghini_HURACAN_LP580-2.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('McLaren 570S', '{}', 16, 'Premium', 2, 2, './images/McLaren_570S.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Aston Martin DB11', '{}', 18, 'Premium', 2, 4, './images/Aston_Martin_DB11.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Mercedes-Benz AMG GT', '{}', 19, 'Premium', 2, 2, './images/Mercedes-Benz_AMG_GT.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('BMW i8', '{}', 0, 'Electric', 2, 4, './images/BMW_i8.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Acurra NSX', '{}', 21, 'Hybrid/Premium', 2, 4, './images/Acura_NSX.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Alfa Romeo 4C Spider', '{}', 24, 'Premium', 2, 2, './images/Alfa_Romeo_4C_Spider.png', '2019-11-26 10:01:00', '2019-11-26 10:01:00'),
('Audi S8', '{}', 14, 'Premium', 4, 5, './images/Audi_S8.jpg', '2019-11-26 10:01:00', '2019-11-26 10:01:00');

INSERT INTO reviews (name, rating, review, createdAt, updatedAt, vehicleId) VALUES 
('Poppy Hinton', 5, 'The Ferrari f430 was an amzing car. Would definitely recommend this car! 5/5', '2019-11-26 10:01:00', '2019-11-26 10:01:00', 1),
('Dalton Blaese', 5, "Thank you for making it painless, pleasant and most of all hassle free! It's exactly what I've been looking for. I'm good to go.", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 2),
('Amaya Higgs', 5, 'I wish I would have thought of it first.', '2019-11-26 10:01:00', '2019-11-26 10:01:00', 3),
('Poppy Hinton', 5, "Just what I was looking for. Man, this thing is getting better and better as I learn more about it. This is simply unbelievable! It's really wonderful.", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 4),
('Vienna Bowler', 5, "Lamborghini is worth much more than I paid. If you aren't sure, always go for Lamborghini. I am so pleased with this product. Lamborghini should be nominated for service of the year", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 5),
('Manahil Best', 5, "I will let my mum know about this, she could really make use of McLaren! It fits our needs perfectly. It's all good.", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 6),
('Ajay Holman', 5, "Just what I was looking for. I would also like to say thank you to all your staff. Aston Martin is awesome! I am so pleased with this product.", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 7),
('Deanne Austin', 5, "It's was amazing!", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 8),
('Blane Collier', 5, "The best car ever!", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 9),
('Hasnain Irwin', 5, "Definitely would recommend!", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 10),
('Cade Fisher', 5, "Such a great car!", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 11),
('Jameel Berry', 5, "Would definitely take it for a ride again!", '2019-11-26 10:01:00', '2019-11-26 10:01:00', 12);

-- JSON Version of Seed to be used with the 'multiple/vehicles
[
  {
    "name": "Ferrari F430 F1",
    "reservedFrom": "{}",
    "mpg": 11,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Ferrari_F430_F1.jpg" 
  },
  {
    "name": "Ferrari 458 ITALIA",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Ferrari_458_ITALIA.jpg" 
  },
  {
    "name": "Ferrari 488 GTB",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Ferrari_458_ITALIA.jpg" 
  },
  {
    "name": "Lamborghini GALLARDO LP550-2",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Lamborghini_GALLARDO_LP550-2.jpg" 
  },
  {
    "name": "Lamborghini HURACAN LP580-2",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Lamborghini_HURACAN_LP580-2.jpg" 
  },
  {
    "name": "McLaren 570S",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/McLaren_570S.jpg" 
  },
  {
    "name": "Aston Martin DB11",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Aston_Martin_DB11.jpg" 
  },
  {
    "name": "Mercedes-Benz AMG GT",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Mercedes-Benz_AMG_GT.jpg" 
  },
  {
    "name": "BMW i8",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/BMW_i8.jpg" 
  },
  {
    "name": "Acurra NSX",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Acura_NSX.jpg" 
  },
  {
    "name": "Alfa Romeo 4C Spider",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Alfa_Romeo_4C_Spider.png" 
  },
  {
    "name": "Audi S8",
    "reservedFrom": "{}",
    "mpg": 13,
    "gasType": "Premium",
    "doors": 2,
    "seats": 2,
    "photoLink": "./images/Audi_S8.jpg" 
  }
]

