export default {
  name: 'predavanje',
  type: 'document',
  title: 'Архива предавања',
  fields: [
    { name: 'naslov', type: 'string', title: 'Наслов трибине' },
    { name: 'predavac', type: 'string', title: 'Предавач (Име и титула)' },
    { name: 'datum', type: 'date', title: 'Датум одржавања' },
    { name: 'youtubeUrl', type: 'url', title: 'YouTube линк' },
    { name: 'opis', type: 'text', title: 'Кратак опис' }
  ]
}
