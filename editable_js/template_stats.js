/**
 * STATS VIEW - STUDENTS IMPLEMENT
 * Show aggregate statistics and insights - good for understanding the big picture
 */
function showStats(data) {
    const statsHTML = data        .map(
        /*html*/
        (jin) => `
                <tr class="restaurant-table">
                    <th><strong>${jin.start_up_frame}</strong></th>
                    <th>${jin.hit_level}</th>
                    <th>${jin.block_frame}</th>
                </tr>
            `
    ).join("")
    return `
           <h2 class="view-title">Frame Data</h2>
            <p class="view-description">Moves with their frame data to reference when practicing.</p>
            <div class="card-grid">
            ${listHTML}
            </div>
            `;
}

export default showStats