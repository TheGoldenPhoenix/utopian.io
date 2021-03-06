import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import CategoryIcon from '../CategoriesIcons';

import './Contribution.less';

const categorySlug = type => {
  switch (type) {
    case 'ideas':
      return 'Suggestion for';
    case 'sub-projects':
      return 'Project for';
    case 'development':
      return 'Development of';
    case 'bug-hunting':
      return 'Bug in';
    case 'translations':
      return 'Translation for';
    case 'analysis':
      return 'Analysis for';
    case 'graphics':
      return 'Graphics for';
    case 'social':
      return 'Visibility for';
    case 'documentation':
      return 'Documentation for';
    case 'tutorials':
      return 'Tutorial for';
    case 'video-tutorials':
      return 'Video Tutorial for';
    case 'copywriting':
      return 'Copywriting for';
    case 'task-ideas':
      return 'Thinkers for';
    case 'task-development':
      return 'Developers for';
    case 'task-bug-hunting':
      return 'Bug Hunters for';
    case 'task-documentation':
      return 'Tech Writers for';
    case 'task-translations':
      return 'Translators for';
    case 'task-analysis':
      return 'Data Analysts for';
    case 'task-graphics':
      return 'Designers for';
    case 'task-social':
    case 'social':
      return 'Influencers for';
  }
};

const parsedRepoName = (author, name) => {
  if ((author.length + name.length) < 35) {
    return `${author}/${name}`;
  }
  if (author.length > 15) {
    author = author.substr(0, 15) + "...";
  }
  if (name.length > 23) {
    name = name.substr(0, 23) + "...";
  }
  return `${author}/${name}`;
}

const Contribution = ({type, repository, platform, id, showVerified, showPending, showFlagged, showInProgress}) => (
  <div className={`Contribution ${type}`}>
    <b>
      <CategoryIcon type={type} /> {categorySlug(type)} </b>&nbsp;
    <Link to={`/project/${repository.full_name}/${platform}/${id}/all`}>
      {' '} <Icon type='github' /> {parsedRepoName(repository.owner.login, repository.name)}
    </Link>
    {showPending ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="sync"/>
      </span>
      : null}
    {showFlagged ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="exclamation-circle-o"/>
      </span>
      : null}
    {showInProgress ? 
      <span className="markPullRight">
      <Icon className="markIcon" type="safety"/>
      </span>
    : null}
    {type.indexOf('task') > -1 && <Icon type="notification" className={`task ${showPending || showFlagged || showInProgress ? 'withStatus' : '' }`}/> }
    
  </div>
);

export default Contribution;
