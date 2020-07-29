Use to set configs. Delete this line and save file as `config.js`. Set your local data conections.

```
module.exports={
  "development": {
    "username": "root",
    "password": "yourPassword,
    "database": "dataBaseName",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define":{ //no hace busqueda de create y data_id
      "paranoid" : true, //si encuentra deleted-at fecha de borrado
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```