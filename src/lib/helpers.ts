import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import type { Solutions } from './types';

export const solutions_path = path.join('assets', 'solutions.json');

export const getSolutions = () => {
    return (JSON.parse(fs.readFileSync(solutions_path, 'utf-8')) as Solutions);
}

const loadJsonWithSchema = (filePath: string): { data: any, schema?: string } => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContents);
    const schema = jsonData['$schema'];
    return { data: jsonData, schema };
}

const loadSchema = async (schemaUrl: string): Promise<any> => {
    const schemaContents = fs.readFileSync(schemaUrl, 'utf8');
    return JSON.parse(schemaContents);
}

export const validateJson = async (path: string) => {
    const { data, schema } = loadJsonWithSchema(path);

    if (!schema)
        throw new Error(`No $schema found in ${path}`);

    const schemaFilePath = `assets/${schema.split('/').pop()}`;

    const ajv = new Ajv();
    addFormats(ajv);

    const validate = ajv.compile(await loadSchema(schemaFilePath));

    const valid = validate(data);

    if (!valid) {
        throw new Error(`Validation errors: ${JSON.stringify(validate.errors)}`);
    }

    return data;
}