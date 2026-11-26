# CODTEXA

Сервис активации и управления цифровым пространством CODTEXA.

## Технологии

- React + Vite
- TypeScript
- Node.js + Express
- PostgreSQL
- Docker Compose

## Запуск через Docker

Сборка и запуск:

```bash
docker compose up -d --build
```

После запуска сервисы доступны по адресам:

- Frontend: http://localhost:5173
- Backend: http://localhost:4001
- Health Check: http://localhost:4001/health

## Остановка

```bash
docker compose down
```

**Важно:** не используйте `docker compose down -v`. PostgreSQL хранит данные в Docker Volume. В конфигурации CODTEXA намеренно используется прежнее имя тома `qr-shirts-v2_postgres_data`, чтобы сохранить существующую базу данных. Имя базы PostgreSQL также остаётся `qrshirts`.

## Перезапуск после изменений

```bash
docker compose up -d --build
```

## Локальная разработка

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Сборка

### Frontend

```bash
cd frontend
npm run build
```

### Backend

```bash
cd backend
npm run build
```

## Структура проекта

```text
CODTEXA
├── backend
├── frontend
├── database
├── docker-compose.yml
├── package.json
└── README.md
```