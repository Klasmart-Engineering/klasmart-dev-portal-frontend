import { allDocs, Doc } from 'contentlayer/generated';

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
}

export const NAV_ROUTES: RouteContext[] = [
    {    
        type: RouteType.SPECS,
        routes: [
            {
                id: `1`,
                path: `/specs/swagger`,
                displayName: `Swagger`
            }
        ]
    },
    {    
        type: RouteType.DOCS,
        routes: allDocs.map((doc: Doc) => {
                    return {
                        id: doc._id,
                        path: `/docs/${doc._raw.flattenedPath}`,
                        displayName: doc.title
                    }
            })
    }
]
