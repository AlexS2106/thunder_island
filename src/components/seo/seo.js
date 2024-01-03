import React from "react"
import useMetadata  from "../../support/hooks/useMetadata.query";

const Seo = ( { title, description, pathname, children } ) => {
  
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  )
}

export default Seo;