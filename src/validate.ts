import { validateJson, solutions_path } from './lib/helpers';
import type { Solutions, Solution } from './lib/types';

(async function () {
    try {

        const data = await validateJson(solutions_path) as Solutions;

        // Check for duplicate categories
        const categoriesSet = new Set<string>();
        data.categories.forEach((category: string) => {
            if (categoriesSet.has(category.toLowerCase()))
                throw new Error(`There is a duplicate category name: ${category}`);
            
            categoriesSet.add(category.toLowerCase());
        });

        // Check for duplicate solutions
        const nameSet = new Set<string>();
        const urlSet = new Set<string>();
        data.solutions.forEach((solution: Solution) => {
            if (!data.categories[solution.category])
                throw new Error(`The category ${solution.category} for ${solution.name} doesn't exist`);

            if (nameSet.has(solution.name.toLowerCase()))
                throw new Error(`Duplicate solution found with name: ${solution.name}`);

            if (urlSet.has(solution.url))
                throw new Error(`Duplicate solution found with URL: ${solution.url}`);

            nameSet.add(solution.name.toLowerCase());
            urlSet.add(solution.url);
        });

        console.log(`${solutions_path} is valid.`);

    } catch (error: any) {
        console.error(`Error reading or validating ${solutions_path}`, error.message);
        process.exit(1);
    }
})();
