import React from 'react';
import {Helmet} from "react-helmet";
import {META_TAGS} from "../../../data/SEO_Metatags";
import PropTypes from "prop-types";


class SEO_MetaTags_Dynamic extends React.Component {

    render() {

        let {pageName, productName, activeLanguage, url} = this.props;

        return (
            <Helmet>
                <title>{productName + META_TAGS[pageName].title[activeLanguage] }</title>
                <meta name="description" content={META_TAGS[pageName].description[activeLanguage]}/>
                <meta name="keywords" content={META_TAGS[pageName].keywords[activeLanguage]}/>
                <link rel="canonical" href={'https://podredeni.eu' + url}/>
            </Helmet>
        );
    }
}


export default SEO_MetaTags_Dynamic;

SEO_MetaTags_Dynamic.propTypes = {
    activeLanguage: PropTypes.string,
    pageName: PropTypes.string,
    productName: PropTypes.string,
    url: PropTypes.string
};