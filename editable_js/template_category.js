/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
function showCategories(data) {
const categoriesHTML = data
    .map(
        (jin) => 
          const targetName = "h";
            const foundItem = jin.find(jin => jin.hit_level === targetName);
            `
            <h3>${foundItem.command}</h3>
            <p><strong>Hit Level:</strong> ${jin.hit_level}</p>
            `
    ).join("")
  return `
            
            `;
}

export default showCategories;