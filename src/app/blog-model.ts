    export interface Author {
        name: string;
        uri: string;
        email: string;
    }

    export interface Link {
        rel: string;
        href: string;
    }

    export interface Link2 {
        rel: string;
        href: string;
    }

    export interface Entry {
        id: string;
        title: string;
        updated: Date;
        link: Link2;
        content: string;
    }

    export interface RootBlog {
        title: string;
        subtitle: string;
        id: string;
        updated: Date;
        author: Author;
        link: Link[];
        entry: Entry[];
    }