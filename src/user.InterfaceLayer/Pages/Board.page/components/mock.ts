import { IInitialData } from "./type"

const mockData: IInitialData = {
  tasks: {
    task_1: {
      id: 'task_1',
      text: 'Item'
    },
    task_2: {
      id: 'task_2',
      text: 'Anna'
    },
    task_3: {
      id: 'task_3',
      text: 'Item 3'
    },
    task_4: {
      id: 'task_4',
      text: 'Item 4'
    },
    task_5: {
      id: 'task_5',
      text: 'Arina'
    },
  },

  columns: {
    'col-1': {
      id: 'col-1',
      title: 'Черновик',
      taskIDs: ['task_1', 'task_2', 'task_3', 'task_4']
    },
    'col-2': {
      id: 'col-2',
      title: 'В работе',
      taskIDs: ['task_5']
    },
    'col-3': {
      id: 'col-3',
      title: 'Завершена',
      taskIDs: []
    }
  },

  columnOrder: ['col-1', 'col-2', 'col-3']
}

export default mockData
