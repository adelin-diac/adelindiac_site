import CustomLink from "@/components/mdx/custom-link";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-wide sm:text-5xl mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold tracking-wide sm:text-2xl mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold tracking-wide sm:text-lg mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-4" />,
    a: ({ href, children }) => (
      <CustomLink href={href} noopener={true} noreferrer={true}>
        {children}
      </CustomLink>
    ),
  };
}
