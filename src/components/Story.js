import React from 'react';

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url,text } }) => {
  return (
    <div className="story">
	<div className="story-title">
	<span>
	 {text} 
	</span>
	</div>
      <div className="story-title">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          by{':'}{by}         
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>
        |
        <span>
            <a href={'/comments/' +  id } target="_self" rel="noreferrer">
				{`${kids && kids.length > 0 ? kids.length : 0} comments`} 
			</a>		
                   
        </span>
      </div>
    </div>
  );
};

export default Story;
