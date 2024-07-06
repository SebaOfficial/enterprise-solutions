import fs from 'fs';
import path from 'path';
import { getSolutions, getCategories } from './lib/helpers';

const template_path = path.join('assets', 'README.template.md');
const output_path = "README.md";

const sorted_categories = getCategories().sort((a, b) => a.name.localeCompare(b.name));
const sorted_solutions = getSolutions().sort((a, b) => a.name.localeCompare(b.name));

const genSolutionsTOC = (): string => {
    let toc = '';

    sorted_categories.forEach(category => {
        let category_link = category.name.toLowerCase().replace(new RegExp(' ', 'g'), '-').replace(new RegExp('&', 'g'), '');
        toc += `\t* [${category.name}](#${category_link})\n`
    });

    return toc;
};

const genSolutionsTableList = (): string => {
    const table_headers = ['Name', 'Description', 'Can be Self Hosted'];
    let tables = '';

    sorted_categories.forEach(category => {
        let table = `# ${category.name}\n`;
        table += `| ${table_headers.join(' | ')} |\n`;
        table += `| ${Array(table_headers.length).fill('---').join(' | ')} |\n`

        sorted_solutions.filter(s => s.category == category.id).forEach(s => {
            table += `| ${s.name} | ${s.description} | ${s.selfHost ? ':heavy_check_mark:' : ':x:'} |\n`;
        });

        tables += `${table}\n`;
    });

    return tables;
}

(function () {
    let template = fs.readFileSync(template_path, 'utf-8');

    const replacements = [
        { from: '<!-- SOLUTIONS_TOC -->', to: genSolutionsTOC() },
        { from: '<!-- SOLUTIONS_TABLE_LIST -->', to: genSolutionsTableList() },
    ];

    replacements.forEach(replacement => {
        template = template.replace(new RegExp(replacement.from, 'g'), replacement.to);
    });

    fs.writeFileSync(output_path, template);

    console.log(`README.md generated successfully`);
})();