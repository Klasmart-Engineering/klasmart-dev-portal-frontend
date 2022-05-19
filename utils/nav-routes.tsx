import {
    allDocs,
    Doc,
} from 'contentlayer/generated';

export enum RouteType {
    SPECS = 1,
    DOCS = 2
}

interface RouteContext {
    type: RouteType;
    routes: RouteParams[];
}

export interface RouteParams {
    id: string;
    path: string;
    displayName: string;
    locale: string;
}

export const NAV_ROUTES: RouteContext[] = [
    {
        type: RouteType.SPECS,
        routes: [
            {
                id: `1`,
                path: `/specs/swagger`,
                displayName: `Swagger`,
                locale: `en-US`,
            },
        ],
    },
    {
        type: RouteType.DOCS,
        routes: allDocs.map((doc: Doc) => {
            const pathName = doc._raw.flattenedPath.split(`/`)[1];
            return {
                id: doc._id,
                path: `/docs/${doc.locale}/${pathName}`,
                displayName: doc.title,
                locale: doc.locale,
            };
        }),
    },
];
