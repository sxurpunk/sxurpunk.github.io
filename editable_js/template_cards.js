
/**
 * CARD VIEW - PROVIDED AS EXAMPLE
 * Display data as browsable cards - good for comparing individual items
 */
function showCards(data) {
  const cardHTML = data
    .map(
       /*html*/ 
      (jin) => `
                <div class="restaurant-card">
                    <h3>${jin.command}</h3>
                    <p><strong>Hit Level:</strong> ${jin.hit_level}</p>
                </div>
            `
    )
     /*html*/ 
  return `
                <h2 class="view-title">🃏 Card View</h2>
                <p class="view-description">Browse restaurants as individual cards - perfect for comparing options</p>
                <div class="card-grid">
                    ${cardHTML}
                </div>
            `;
}

export default showCards;