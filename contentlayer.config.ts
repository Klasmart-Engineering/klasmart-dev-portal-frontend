import {
    defineDocumentType,
    makeSource,
} from 'contentlayer/source-files';

const Doc = defineDocumentType(() => ({
    name: `Doc`,
    filePathPattern: `**/*.md*`,
    contentType: `mdx`,
    fields: {
        title: {
            type: `string`,
            description: `The title of the doc`,
            required: true,
        },
        date: {
            type: `date`,
            description: `The date of the doc`,
            required: false,
        },
    },
    computedFields: {
        url: {
            type: `string`,
            resolve: (doc) => `/docs/${doc._raw.flattenedPath}`
            ,
        },
        locale: {
            type: `string`,
            resolve: (doc) => {
                const pathFragments = doc._raw.flattenedPath.split(`/`);
                const locale = pathFragments[0];
                return locale;
            },
        },
    },
}));

export default makeSource({
    contentDirPath: `docs`,
    documentTypes: [ Doc ],
});
