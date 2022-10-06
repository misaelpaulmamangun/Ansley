document.addEventListener('alpine:init', () => {
  Alpine.data('main', () => ({
    features: [
      { title: 'Mission', icon: 'fa-flag-checkered' },
      { title: 'Strategy', icon: 'fa-industry' },
      { title: 'Design', icon: 'fa-pencil' },
      { title: 'Development', icon: 'fa-code' },
      { title: 'Finance', icon: 'fa-money' },
      { title: 'Consulting', icon: 'fa-headphones' },
    ],
    cards: [
      { title: 'Ranking', number: 16 },
      { title: 'Client', number: 120 },
      { title: 'Cases', number: 977 },
      { title: 'Awards', number: 40 },
    ],
  }))
})
