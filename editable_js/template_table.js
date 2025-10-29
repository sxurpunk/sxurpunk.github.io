
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */

    const plusOnBlockMoves = jin.filter(function(jin) {
        return jin.block_frame === '+14~+15g';
    })

    plusOnBlockMoves.forEach(function(j) {
    .map(
            /*html*/
            (j) => `
                <div class="restaurant-card">
                    <h3>${j.command}</h3>
                    <p><strong>Hit Level:</strong> ${j.hit_level}</p>
                    <p><strong>Damage:</strong> ${j.damage}</p>
                    <p><strong>Startup Frames:</strong> ${j.start_up_frame}</p>
                    <p><strong>On-Block Frames</strong> ${j.block_frame}</p>
                </div>
            `
        ).join("")
    })
    
  return `
                <h2 class="view-title">📊 Table View</h2>
            `;
}

export default showBlockMoves;