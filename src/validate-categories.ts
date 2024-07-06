import path from 'path';
import { validateJson } from './lib/helpers';
import type { Category } from './lib/types';


const categories_path = path.join('assets', 'categories.json');

(async function () {
    try {

        const data: { categories: Category[] } = await validateJson(categories_path) as { categories: Category[] };

        const categories = data.categories;

        // Check for duplicate names
        const names = new Set<string>();
        categories.forEach((category: Category) => {
            if (names.has(category.name)) {
                throw new Error(`There is a duplicate category name: ${category.name}`);
            } else {
                names.add(category.name);
            }
        });

        // Check for incremental ids starting from 0
        let expectedId = 0;
        categories.forEach((category: Category) => {
            if (category.id !== expectedId) {
                throw new Error(`Expected id ${expectedId} but found ${category.id} for category '${category.name}'`);
            }
            expectedId++;
        });

        console.log(`${categories_path} is valid.`);

    } catch (error: any) {
        console.error(`Error reading or validating ${categories_path}`, error.message);
        process.exit(1);
    }
})();
