import React from 'react';

import { Grid, Clearfix } from 'react-bootstrap';

import homeContentService from '../../../../../services/homeContent/homeContentService';

class AboutProduct extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			sectionHeading: '',
			sectionContent: '',
			articleHeading: '',
			articleContent: ''
		}
	}

    componentDidMount () {
        this.loadHomeContent();
    }

    loadHomeContent = () => {
        homeContentService
            .loadHomeContent()
            .then(res => {
                this.setState({
					sectionHeading: res.content.sectionHeading,
                    sectionContent: res.content.sectionContent,
                    articleHeading: res.content.articleHeading,
                    articleContent: res.content.articleContent
                })
            })
            .catch(err => {
                console.log(err.Message)
                });
    };

	render () {

		return (
			<Grid fluid id="home-about" className="bg-white">
				<Grid>
					<h2 className="section-heading">{this.state.sectionHeading}</h2>
					<div className="home-text" dangerouslySetInnerHTML={{__html: this.state.sectionContent}}/>
				</Grid>

				<Clearfix/>


				<div id="home-banner-1">
					<div className="wrapper">
						<article className="article-box">
							<div className="article-content bg-white">
								<h4>{this.state.articleHeading}</h4>
								<div dangerouslySetInnerHTML={{__html: this.state.articleContent}}/>
							</div>

							<div className="article-image">
								<img src="/images/show/image_02.jpg"/>
							</div>
						</article>
					</div>
				</div>
			</Grid>
		);
	}
}

export default AboutProduct;