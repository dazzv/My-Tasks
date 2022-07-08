# My Tasks
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
Исполнитель: Давлат Азизов

Тестовое задание_Mediasoft 

Задание: Реализовать ToDo List — приложение на стеке Vue/
Vuex.

Компоненты: Задача, Список задач, Форма добавления Задачи
Список задач: 1.Router: pathname - /list - открывается при переходе в
список задачÂ
2. Vuex: список задач хранится в store - listÂ
3. list - может быть либо массивом, либо объектом
(ключ - id Задачи, значение - объект с информацией
о задаче - в объекте также есть поле id)Â
4. Удаленные задачи открывать в отдельном route,
фильтровать данные из массива по полю isDeletedÂ
5. Реализовать фильтры и сортировки либо на уровне
Vuex, либо на уровне Router (пример url - /list?
sort=by_name&order=asc).

Задача: 1. Router: pathname - /list/${id} - открывается при
переходе из списка задачÂ
2. Vuex: у задачи можно редактировать описание
задачи и менять группу (Выполнить, Выполняется,
Выполнена). Задача изменяется в store в списке
задач - listÂ
3. Реализовать Редактирование полей задачи - при
нажатии на кнопку редактирования открывается
компонент формы добавления Задача,
заполненный полями из Задачи (пример url - /
list/53252/edit или /list/edit?id=53252).
4 Router: pathname - /list/${id} - открывается при
переходе из списка задачÂ
5 Vuex: у задачи можно редактировать описание
задачи и менять группу (Выполнить, Выполняется,
Выполнена). Задача изменяется в store в списке
задач - listÂ
6 Реализовать Редактирование полей задачи - при
нажатии на кнопку редактирования открывается
компонент формы добавления Задача,
заполненный полями из Задачи (пример url - /
list/53252/edit или /list/edit?id=53252).

Форма добавления Задачи:
1 Router: pathname - /list/add - открывается при
переходе из списка задач на кнопку “Добавить
Задачу”’Â
2 Vuex: при добавлении Задачи, она добавляется в
store - list.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
