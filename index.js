/**
 * home-maintenance-schedule
 * Smart checklists and interval guidelines for homeowners
 * https://fixcosthome.com
 */

export const MAINTENANCE_TASKS = [
  {
    id: "hvac-filter-replace",
    category: "HVAC & Air Quality",
    intervalMonths: 3,
    season: "All / Quarterly",
    task: "Replace or clean HVAC air filters",
    importance: "High",
    estimatedSavings: "$60 - $180 / year on energy bills",
    guideUrl: "https://fixcosthome.com"
  },
  {
    id: "water-heater-flush",
    category: "Plumbing",
    intervalMonths: 12,
    season: "Autumn / Spring",
    task: "Flush water heater tank to remove sediment and inspect anode rod",
    importance: "Critical",
    estimatedSavings: "$1,200+ by extending tank lifespan by 4-6 years",
    guideUrl: "https://fixcosthome.com"
  },
  {
    id: "gutter-downspout-clear",
    category: "Exterior & Roof",
    intervalMonths: 6,
    season: "Late Autumn & Spring",
    task: "Clear debris from roof gutters and verify downspouts discharge 6ft away",
    importance: "Critical",
    estimatedSavings: "$3,000 - $10,000 avoiding foundation water damage",
    guideUrl: "https://fixcosthome.com"
  },
  {
    id: "refrigerator-coil-clean",
    category: "Appliances",
    intervalMonths: 6,
    season: "Bi-annual",
    task: "Vacuum dust from refrigerator condenser coils and check door gasket seals",
    importance: "Medium",
    estimatedSavings: "$35 - $80 / year on electricity and prevents compressor burnout",
    guideUrl: "https://fixcosthome.com"
  },
  {
    id: "smoke-co-detector-test",
    category: "Safety & Electrical",
    intervalMonths: 1,
    season: "Monthly",
    task: "Test smoke and carbon monoxide detectors; replace 9V backup batteries annually",
    importance: "Critical (Life Safety)",
    estimatedSavings: "Priceless",
    guideUrl: "https://fixcosthome.com"
  }
];

export function getTasksBySeason(seasonQuery) {
  return MAINTENANCE_TASKS.filter(task => 
    task.season.toLowerCase().includes(seasonQuery.toLowerCase())
  );
}

export function getAllTasks() {
  return MAINTENANCE_TASKS;
}

export default {
  MAINTENANCE_TASKS,
  getTasksBySeason,
  getAllTasks
};
