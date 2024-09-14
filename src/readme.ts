import fs from 'fs';
import path from 'path';
import { getSolutions } from './lib/helpers';

const template_path = path.join('assets', 'README.template.md');
const output_path = "README.md";

const data = getSolutions();
const sorted_categories = [...data.categories].sort((a, b) => a.localeCompare(b));
const sorted_solutions = [...data.solutions].sort((a, b) => a.name.localeCompare(b.name));

const genSolutionsTOC = (): string => {
    let toc = '';

    sorted_categories.forEach(category => {
        let category_link = category.toLowerCase().replace(new RegExp(' ', 'g'), '-').replace(new RegExp('&', 'g'), '');
        toc += `\t* [${category}](#${category_link})\n`
    });

    return toc;
};

const genSolutionsTableList = (): string => {
    const table_headers = ['Name', 'Description', 'GitHub URL'];
    let tables = '';

    sorted_categories.forEach(category => {
        let table = `### ${category}\n`;
        table += `| ${table_headers.join(' | ')} |\n`;
        table += `| ${Array(table_headers.length).fill('---').join(' | ')} |\n`

        sorted_solutions.filter(s => s.category === data.categories.findIndex(c => c === category)).forEach(s => {
            table += `| [${s.name}](${s.url}) | ${s.description} | [${s.github}](https://github.com/${s.github}) |\n`;
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