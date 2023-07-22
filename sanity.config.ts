import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas'
import pizza from './sanity/schemas/pizza-schema';
export default defineConfig({
    title: 'sanity next hot pizza',
    projectId: '0gqdu99z',
    dataset: 'production',
    apiVersion: '2023-06-14',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types : schemas}

});