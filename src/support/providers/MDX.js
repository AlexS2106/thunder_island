import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDXProvider } from "@mdx-js/react";

import { 
  mdxLinks,
  ingredients,
  instructions,
  recipeContent,
  articleContent,
  poemContent
} from "./MDX.module.css"

import Button from "../../components/buttons/Button";
import Spacer from "../../components/layout/spacing/Spacer";


export default function MDX ( body ) {

  const paragraphs = ( { children, ...props } ) => {
    return (
      <p className="pad1" { ...props } >{ children }</p>
    )
  };
  const heading2 = ( {children, ...props} ) => (
    <h2 className="shadowText" { ...props } >{ children }</h2>
  );
  const heading3 = ( {children, ...props} ) => (
    <h3 className="shadowText" { ...props } >{ children }</h3>
  );
  const heading4 = ( {children, ...props} ) => (
    <h4 className="shadowText" { ...props } >{ children }</h4>
  );
  const heading5 = ( {children, ...props} ) => (
    <h5 className="shadowText" { ...props } >{ children }</h5>
  );
  const heading6 = ( { children, ...props } ) => (
    <h6 { ...props } >{ children }</h6>
  );
  const links = ( { children, ...props } ) => { 
    return (
      <a className={ mdxLinks } { ...props } href={ children }>{ children }</a>
    )
  }
  const Ingredients = ( { children, ...props } ) => (
    <div className={ ingredients } { ...props }>
      { children }
    </div>
  );
  const Instructions = ( { children, ...props } ) => (
    <div className={ instructions } { ...props }>
      { children }
    </div>
  );
  const RecipeContent = ( { children, ...props } ) => {
    const [ show, setShow ] = useState(false)
    return (
      <div className={ recipeContent } { ...props }>
        {
          !show ?
          <Button onClick={ () => setShow( true ) } innerText="See full post?" style={ { margin: "auto" } } />
            : null
        }
        <Spacer size={ 3 } />
        { show ? children : null }
        {
          show ?
          <Button onClick={ () => setShow( false ) } innerText="Hide full post?" style={ { margin: "auto" } } />
            : null
        }
      </div>
    );
  };

  const ArticleContent = ( { children, ...props } ) => {
    return (
      <div className={ articleContent } { ...props }>
        { children }
      </div>
    );
  };

  const PoemContent = ( { children, ...props } ) => {
    return (
      <div className={ poemContent } { ...props }>
        { children }
      </div>
    );
  };

  const components = {
    p: paragraphs,
    h2: heading2,
    h3: heading3,
    h4: heading4,
    h5: heading5,
    h6: heading6,
    a: links,
    Ingredients,
    Instructions,
    RecipeContent,
    ArticleContent,
    PoemContent
  };

  return (
    <MDXProvider components={ components } >{ body }</MDXProvider>
  );
}

MDX.propTypes = {
  body: PropTypes.object,
};

