<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<div style="width: 50%; margin: auto;">
  <canvas id="magicChart"></canvas>
</div>

<script>
  const ctx = document.getElementById('magicChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Metas', 'Runestones', 'Scarlets', 'Dark Malefici', 'Mage'],
      datasets: [{
        label: '% of Population',
        [cite_start]data: [27.5, 45, 0.275, 13.6, 13.6], // Data sourced from document [cite: 1642-1648]
        backgroundColor: [
          '#36a2eb', // Blue for Metas
          '#ffcd56', // Yellow for Runestones
          '#ff0000', // Red for Scarlets
          '#000000', // Black for Dark Malefici
          '#4bc0c0'  // Teal for Mage
        ],
        borderWidth: 1
      }]
    },
    options: {
        plugins: {
            title: { display: true, text: 'Distribution of Magi Types', color: 'white' },
            legend: { labels: { color: 'white' } }
        }
    }
  });
</script>