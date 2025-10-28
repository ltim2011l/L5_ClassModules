import SubTask from './Doch.js';

const instances = [
  new SubTask(1,"Отжумания",false,"10 раз"),
  new SubTask(2,"Прыгат",false,"20 раз")
];

instances.forEach(instance => instance.show());
