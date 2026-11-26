# CODTEXA

РЎРµСЂРІРёСЃ Р°РєС‚РёРІР°С†РёРё Рё СѓРїСЂР°РІР»РµРЅРёСЏ С†РёС„СЂРѕРІС‹Рј РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕРј CODTEXA.

## РўРµС…РЅРѕР»РѕРіРёРё

- React + Vite
- TypeScript
- Node.js + Express
- PostgreSQL
- Docker Compose

## Р—Р°РїСѓСЃРє С‡РµСЂРµР· Docker

РЎР±РѕСЂРєР° Рё Р·Р°РїСѓСЃРє:

```bash
docker compose up -d --build
```

Frontend: http://localhost:5173
Backend: http://localhost:4001
Health Check: http://localhost:4001/health

## РћСЃС‚Р°РЅРѕРІРєР°

```bash
docker compose down
```

> РќРµ РёСЃРїРѕР»СЊР·СѓР№С‚Рµ `docker compose down -v`: PostgreSQL С…СЂР°РЅРёС‚ РґР°РЅРЅС‹Рµ РІ СЃСѓС‰РµСЃС‚РІСѓСЋС‰РµРј Docker Volume. Р’ РєРѕРЅС„РёРіСѓСЂР°С†РёРё CODTEXA РѕРЅ РЅР°РјРµСЂРµРЅРЅРѕ РїРѕРґРєР»СЋС‡С‘РЅ РїРѕ РїСЂРµР¶РЅРµРјСѓ РёРјРµРЅРё `qr-shirts-v2_postgres_data`, С‡С‚РѕР±С‹ СЃРѕС…СЂР°РЅРёС‚СЊ РґР°РЅРЅС‹Рµ. РРјСЏ Р±Р°Р·С‹ PostgreSQL С‚Р°РєР¶Рµ РЅР°РјРµСЂРµРЅРЅРѕ РѕСЃС‚Р°С‘С‚СЃСЏ `qrshirts`.

## РџРµСЂРµР·Р°РїСѓСЃРє РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёР№

```bash
docker compose up -d --build
```

## Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°

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

## РЎР±РѕСЂРєР°

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

## РЎС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р°

```text
CODTEXA
в”њв”Ђв”Ђ backend
в”њв”Ђв”Ђ frontend
в”њв”Ђв”Ђ database
в”њв”Ђв”Ђ docs
в”њв”Ђв”Ђ docker-compose.yml
в””в”Ђв”Ђ README.md
```
