export interface ITask {
  id: string;
  text: string;
}

interface Tasks {
  [taskId: string]: ITask;
}

interface Column {
  id: string;
  title: string;
  taskIDs: string[];
}

interface Columns {
  [columnId: string]: Column;
}

export interface IInitialData {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
}