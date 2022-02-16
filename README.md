# Api management

### Скрипты в приложение

1. `npm run start` - запускает приложение локально
1. `npm run build:prod`- собирает приложение для proda
1. `npm run lint` - испровляет файлы js, jsx, ts, tsx по правилам линта
1. `npm run test` - запускает тесты
1. `npm run format` - форматирует файлы json, js, ts, tsx по правилам претера
1. `npm run clean:code` - удаляет часть не нужного сгенерированного кода, используется в codegen
1. `npm run codegen` - генирит модели по свагеру

### Настройки keycloak в приложине

Находится в файле keycloak.ts, нужно указать url на котором работает сервис keycloak, realm к которуму нужно подключится и clientId

```
const keycloak = Keycloak({
  url: 'https://keycloak-uzcards.dbp.inno.tech/auth',
  realm: 'Uzcard',
  clientId: 'tashkent',
})
```

### Настройки keycloak в админке
Нужно перейти на вкладку Clients, выбрать нужного клиента.
Указать Valid Redirect URIs - `https://api-uzcards.dbp.inno.tech/*` тот url, на котором работает приложение. Также установить Web Origins - `https://api-uzcards.dbp.inno.tech`, что бы решить проблему с корсами.

