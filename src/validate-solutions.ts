import { validateJson, solutions_path, categories_path } from './lib/helpers';
import type { Solution, Category } from './lib/types';

(async function () {
    try {

        const data: { solutions: Solution[] } = await validateJson(solutions_path) as { solutions: Solution[] };
        const categoryData: { categories: Category[] } = await validateJson(categories_path) as { categories: Category[] };

        const categories = new Set(categoryData.categories.map(category => category.id));

        // Check for duplicates
        const nameSet = new Set<string>();
        const urlSet = new Set<string>();

        data.solutions.forEach((solution: Solution) => {
            if (!categories.has(solution.category))
                throw new Error(`The category ${solution.category} for ${solution.name} is not listed in ${categories_path}`);

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
