// Импорты модулей
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Импорт модуля multer
const multer = require('multer');

// Импорты роутеров, контроллеров
const usersRouter = require('../backend/routes/users');
const tracksRouter = require('../backend/routes/tracks');
const commentsCtrl = require('../backend/controllers/comments');
const likesCtrl = require('../backend/controllers/likes');
const repostsCtrl = require('../backend/controllers/reposts');
const uploadCtrl = require('../backend/controllers/upload');
const apiCtrl = require('../backend/controllers/api');

// Настройки безопасности
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

// Маршрутизация(Роуты)
app.use('/users', usersRouter);
app.use('/tracks', tracksRouter);

// Настройка Multer для загрузки файлов
const upload = multer({ storage: multer.memoryStorage() });

// Роуты для внешних API
app.get('/api/spotify/top', apiCtrl.getSpotifyTopHits);

// Валидация
const { check, validationResult } = require('express-validator');
app.use([
  check('param').isEmail(),
  check('param2').isLength({ min: 5 }),
]);

app.post('/purchase', [
  // Валидация параметров здесь
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Логика для обработки запроса при успешной валидации
  // ...
});

// Обработка ошибок
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Ошибка сервера');
});

// Запуск сервера
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on http://localhost:' + (process.env.PORT || 3000));
});


// Конфигурация CORS и логгирования
app.use(cors());
app.use(morgan('dev'));

// CORS - Разрешаем запросы с указанного origin
const allowedOrigins = ['https://www.example.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = `Недопустимый origin: ${origin}`;
      return callback(new Error(msg), false);
    }
  }
}));

module.exports = app;
