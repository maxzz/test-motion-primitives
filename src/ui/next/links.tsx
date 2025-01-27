import { type HTMLProps } from "react";

export function Link(props: HTMLProps<HTMLAnchorElement>) {
    return (
        <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        />
    );
}
