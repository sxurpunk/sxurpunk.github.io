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
            
            `;
}

export default showCategories;