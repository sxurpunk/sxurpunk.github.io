/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
function showCategories(data) {
const categoriesHTML = data        .map(
    /*html*/
    (jin) => `
                <tr class="restaurant-table">
                    <th><strong>${jin.command}</strong></th>
                    <th>${jin.hit_level}</th>
                </tr>
            `
    ).join("")
  return `
           <h2 class="view-title">Hit Level</h2>
            <p class="view-description">Moves with their hit level to reference when practicing.</p>
            <p class="view-description">h = high, m = mid, l = low</p>
            <div class="card-grid">
            ${listHTML}
            </div>
            `;
}

export default showCategories;