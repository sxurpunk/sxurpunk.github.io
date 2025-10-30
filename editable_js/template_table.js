
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */

const punishmentFilter = jin.filter(function (punishment) {
    return punishment.block_frame = '+6';
})

function showTable(data) {
    const punishmentMoves = data
    punishmentMoves.forEach(function (move) {
        `
        <div className="restaurant-card">
            <h3>${move.command}</h3>
            <p><strong>Hit Level:</strong> ${move.hit_level}</p>
            <p><strong>Damage:</strong> ${move.damage}</p>
            <p><strong>Startup Frames:</strong> ${move.start_up_frame}</p>
            <p><strong>On-Block Frames</strong> ${move.block_frame}</p>
        </div>
        `
    })

    return `
                <h2 class="view-title">Key Punishment Moves</h2>
                <p class="view-description">Jin Kazama's core punishment tools.</p>
                <div class="card-grid">
                    ${punishmentMoves}
            `;
}

export default showTable;