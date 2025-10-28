
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
                    <p><strong>Damage:</strong> ${jin.damage}</p>
                    <p><strong>Startup Frames:</strong> ${jin.start_up_frame}</p>
                    <p><strong>On-Block Frames</strong> ${jin.block_frame}</p>
                </div>
            `
    ).join("")
     /*html*/ 
  return `
                <h2 class="view-title">All Moves</h2>
                <p class="view-description">All of Jin Kazama's moves with inputs, damage, and frame data.</p>
                <div class="card-grid">
                    ${cardHTML}
                </div>
            `;
}

export default showCards;