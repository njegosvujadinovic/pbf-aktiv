import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'dxwed0s4', // Твој ID је сада уграђен
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Искључујемо кеш да би се промене виделе одмах
});
