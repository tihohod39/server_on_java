const tasks = [
    { id: 1, title: 'Изучить Node.js' },
    { id: 2, title: 'Создать API' },
    { id: 2, title: 'Изучаем сложнае' }
  ];
  
  export async function findAll() {
    return tasks;
  }
  
  export async function findById(id) {
    return tasks.find(task => task.id === id) ?? null;
  }
  