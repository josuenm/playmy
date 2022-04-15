import { useEffect } from "react";



interface HeadProps {
  title?: string;
  description?: string;
}


export const Head = ({title = '', description = ''}: HeadProps) => {
  useEffect(() => {

    document.title = title;

    let metaDescription = document
      .querySelector('meta[name="description"]') as HTMLInputElement;

    metaDescription.setAttribute("content", description)

  }, [description, title]);

  return <></>;
};
