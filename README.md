# Api management

### Скрипты в приложение

1. `npm run start` - запускает приложение локально
1. `npm run build:prod`- собирает приложение для proda
1. `npm run lint` - испровляет файлы js, jsx, ts, tsx по правилам линта
1. `npm run test` - запускает тесты
1. `npm run format` - форматирует файлы json, js, ts, tsx по правилам претера
1. `npm run clean:code` - удаляет часть не нужного сгенерированного кода, используется в codegen
1. `npm run codegen` - генирит модели по свагеру

### Установка зависимостей в приложине

Для установки зависимостей необходимо указать нужные реджестри в файле `.npmrc`, который должен лежать к корне приложения.
Данный файл можно скопировать с `dbp/.gitlab-ci/.npmrc`, где за место переменной `${NPM_TOKEN}` поставить свой токен из нексуса.

### Настройки keycloak в приложине

Находится в файле keycloak.ts, нужно указать url на котором работает сервис keycloak, realm к которуму нужно подключится и clientId

```
const keycloak = Keycloak({
  url: 'https://keycloak-uzcards.dbp.inno.tech/auth' - вычисляется,
  realm: 'Uzcard',
  clientId: 'tashkent',
})
```

### Настройки keycloak в админке

1. Перейти на вкладку Clients, выбрать нужного клиента.
1. Указать `Valid Redirect URIs` - `https://api-uzcards.dbp.inno.tech/*` тот url, на котором работает приложение
1. Установить `Web Origins` - `https://api-uzcards.dbp.inno.tech` (без слеша на конце), что бы решить проблему с корсами.
1. Установить `Access Type` - `public`
