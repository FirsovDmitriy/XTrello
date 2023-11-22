const mockData = {
  tasks: {
    task_1: {
      id: '1',
      text: 'Item'
    },
    task_2: {
      id: '2',
      text: 'Item 2'
    },
    task_3: {
      id: '3',
      text: 'Item 3'
    },
    task_4: {
      id: '4',
      text: 'Item 4'
    },
  },

  columns: {
    'col-1': {
      id: 'col-1',
      title: 'Черновик',
      taskIds: ['1', '2', '3', '4']
    },
    'col-2': {
      id: 'col-2',
      title: 'Черновик',
      taskIds: ['2']
    }
  },

  columnOrder: ['col-1']
}

export default mockData
