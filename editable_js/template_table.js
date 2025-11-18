
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
    const listHTML = data
        .map(
            /*html*/
            (jin) => `
                <table class="damage-table">
                    <th><strong>${jin.command}</strong></th>
                    <th>${jin.damage}</th>
                </table>
            `
        ).join("")
    /*html*/

    return `
                <h2 class="view-title">Damage</h2>
                <p class="view-description">Moves with their Damage to reference when practicing.</p>
                <div class="card-grid">
                ${listHTML}
                </div>
            `;
}

export default showTable;

/*  const punishmentHTML = data
      .map(
          (jin) => {
          const punishmentMoves = jin.filter(function (jin) {
              return jin.block_frame === '-9';
          })
              
          punishmentMoves.forEach(function (move) {
              return`
            <div className="restaurant-card">
            <h3>${move.command}</h3>
            <p><strong>Hit Level:</strong> ${move.hit_level}</p>
            <p><strong>Damage:</strong> ${move.damage}</p>
            <p><strong>Startup Frames:</strong> ${move.start_up_frame}</p>
            <p><strong>On-Block Frames</strong> ${move.block_frame}</p>
        </div>
  `
          })}
              
      ).join("")*/

/*        .map(
            (jin) =>
                html += `
                        <table>
            <thead>
                <tr>
                    <th>Input</th>
                    <th>Damage</th>
                </tr>
            </thead>
            <tbody>
                `,
        
            data.forEach(function (jin) {
                html += `
                            <tr>
                <td><strong>${jin.command}</strong></td>
                <td>${jin.damage}</td>
            </tr>
                `
            })
            
        ).join("")*/