const isAdmin = true;
const canWrite = true;
const superAdmin = true;

console.log(`Системный файл ${isAdmin && canWrite}`); // AND

console.log(`Обычный файл ${isAdmin || canWrite}`); // OR - хотябы один из них правдив

console.log(`Инвертируем права админа ${!isAdmin}`); // true -> false

const isEdited = true;

console.log(`Файл с редактированием ${isAdmin && canWrite && (!isEdited || superAdmin)}`);