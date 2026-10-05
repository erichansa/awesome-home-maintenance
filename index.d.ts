export interface MaintenanceTask {
  id: string;
  category: string;
  intervalMonths: number;
  season: string;
  task: string;
  importance: string;
  estimatedSavings: string;
  guideUrl: string;
}

export declare const MAINTENANCE_TASKS: MaintenanceTask[];
export declare function getTasksBySeason(seasonQuery: string): MaintenanceTask[];
export declare function getAllTasks(): MaintenanceTask[];

declare const _default: {
  MAINTENANCE_TASKS: MaintenanceTask[];
  getTasksBySeason: (seasonQuery: string) => MaintenanceTask[];
  getAllTasks: () => MaintenanceTask[];
};
export default _default;
